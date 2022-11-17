<template>
  <div class="q-pa-md">
    <div class="q-pa-md" style="max-width: 400px">
      <h5 class="text-h5 text-bold q-my-md q-pb-lg">{{ id ? "Update" : "Create" }} Admin User</h5>
      <q-form @submit="onSubmit" class="q-gutter-md">
        <q-input
          filled
          v-model="student_id"
          label="Username *"
        />
        <q-input
          filled
          v-model="first_name"
          label="First name *"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
        <q-input
          filled
          v-model="last_name"
          label="Last name *"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
        <q-input filled v-model="password" label="Password" />
        <div class="text-center q-px-lg">
          <q-btn :label="id ? 'Update' : 'Create'" type="submit" color="primary" />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import accountService from "./../../../services/account";

export default defineComponent({
  name: "Account",
  data() {
    return {
      id: "",
      student_id: "",
      first_name: "",
      last_name: "",
      password: "",
      password_confirmation: "",
    };
  },
  computed: {
    ...mapGetters({
      // account: "account",
    }),
  },
  created() {
    if (this.$route.params.id) {
      accountService
        .show(this.$route.params.id)
        .then((data) => {
          this.id = data.id;
          this.student_id = data.student_id;
          this.first_name = data.first_name;
          this.last_name = data.last_name;
          this.loading = false;
        })
        .catch((errors) => {
          this.loading = false;
        });
    }
  },
  methods: {
    onSubmit() {
      accountService
        .update({
          student_id: this.student_id,
          first_name: this.first_name,
          last_name: this.last_name,
          password: this.password,
          password_confirmation: this.password_confirmation,
        }, this.id)
        .then(() => {
          this.$q.dialog({
            title: "Success!",
            message: "Account has been successfully "+(this.id ? 'updated' : 'created'),
          });
          this.loading = false;
          this.$router.push("/admin/users");
        })
        .catch((errors) => {
          this.$q.dialog({
            title: "Error!",
            message: "Failed to "+(this.id ? 'update' : 'create')+" account! Please try again later.",
          });
          this.loading = false;
        });
    },
  },
  watch: {
    account: {
      immediate: true,
      handler(data) {
        if (!data) return;
        this.student_id = data.student_id;
        this.first_name = data.first_name;
        this.last_name = data.last_name;
      },
    },
  },
});
</script>
