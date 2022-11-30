<template>
  <div>
    <div
      class="text-h5 q-mb-md q-p-5"
      style="padding: 10px"
    >
      Student Accounts
    </div>
    <q-list padding>
      <q-item>
        <q-item-section>
          <q-item-label lines="1">ID</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label>First Name</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label>Last Name</q-item-label>
        </q-item-section>
        <q-item-section side>
          Actions
        </q-item-section>
      </q-item>
      <q-item v-ripple v-for="user in users.items" :key="user.id">
        <q-item-section>
          <q-item-label lines="1">{{ user.student_id }}</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ user.first_name }}</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ user.last_name }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <div class="q-gutter-sm">
            <q-btn
              flat
              round
              size="12px"
              icon="visibility"
              @click.prevent="viewUser(user)"
            >
              <q-tooltip anchor="top middle" self="bottom middle">
                View
              </q-tooltip>
            </q-btn>
            <q-btn
              flat
              round
              size="12px"
              icon="phone"
              @click.prevent="showParentMobile(user)"
            >
              <q-tooltip anchor="top middle" self="bottom middle">
                Update Parent Mobile Number
              </q-tooltip>
            </q-btn>
            <q-btn
              flat
              round
              size="12px"
              icon="send"
              @click.prevent="showSms(user)"
            >
              <q-tooltip anchor="top middle" self="bottom middle">
                Send SMS
              </q-tooltip>
            </q-btn>
            <!-- 
            <q-btn
              flat
              round
              size="12px"
              icon="delete"
              @click="remove(user)"
            >
              <q-tooltip anchor="top middle" self="bottom middle">
                Delete
              </q-tooltip>
            </q-btn> -->
          </div>
        </q-item-section>
      </q-item>
    </q-list>
    <div class="q-pa-lg flex flex-center">
      <q-pagination
        v-if="users.pagination"
        v-model="current"
        :max="users.pagination.lastPage"
      />
    </div>
    <div
      class="text-h5 q-mb-md q-p-5"
      style="padding: 10px"
    >
      Admin Accounts
    </div>
    <div style="padding: 10px">
      <q-btn
        :to="`/admin/users/create`"
        color="primary"
        icon="add"
        label="Create Admin User"
      />
    </div>
    <q-list padding>
      <q-item>
        <q-item-section>
          <q-item-label lines="1">ID</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label>First Name</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label>Last Name</q-item-label>
        </q-item-section>
        <q-item-section side>
          Actions
        </q-item-section>
      </q-item>
      <q-item v-ripple v-for="user in admins" :key="user.id">
        <q-item-section>
          <q-item-label lines="1">{{ user.student_id }}</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ user.first_name }}</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ user.last_name }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <div class="q-gutter-sm">
            <q-btn
              flat
              round
              size="12px"
              icon="edit"
              :to="`/admin/users/${user.id}/edit`"
            >
              <q-tooltip anchor="top middle" self="bottom middle">
                Edit
              </q-tooltip>
            </q-btn>
            <!-- <q-btn
              flat
              round
              size="12px"
              icon="delete"
              @click="remove(user)"
            >
              <q-tooltip anchor="top middle" self="bottom middle">
                Delete
              </q-tooltip>
            </q-btn> -->
          </div>
        </q-item-section>
      </q-item>
    </q-list>
    <q-dialog 
      v-model="showViewModal"
    >
    <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section>
          <div class="text-h6">Account Details</div>
        </q-card-section>

        <q-separator />

        <q-card-section style="max-height: 50vh" class="scroll">
          <q-list padding>
            <q-item class="full-width" v-if="viewing">
              <q-item-section>
                <q-item-label>Student ID: <b>{{ viewing.student_id }}</b></q-item-label>
                <q-item-label>Name: <b>{{ viewing.first_name }} {{ viewing.last_name }}</b></q-item-label>
                <q-item-label>Program: <b>{{ viewing.program_description }}</b></q-item-label>
                <q-item-label>Year Level: <b>{{ viewing.year_level }}</b></q-item-label>
                <q-item-label>Section: <b>{{ viewing.section }}</b></q-item-label>
                <q-item-label>Gender: <b>{{ viewing.gender }}</b></q-item-label>
                <q-item-label>Address: <b>{{ viewing.address }}</b></q-item-label>
                <q-item-label>Mobile Number: <b>{{ viewing.cp_number }}</b></q-item-label>
                <q-item-label>Chapter Accessed Count: <b>{{ viewing.chapter_access_count }}</b></q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup @click="viewing = null"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog 
      v-model="showSmsModal"
    >
    <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section>
          <div class="text-h6">Send SMS to Parent</div>
        </q-card-section>

        <q-separator />
        <div class="q-pa-md">
          <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-md"
          >
            <q-input
              filled
              v-model="mobile"
              label="Parent Mobile Number"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />
            <q-input
                v-model="message"
                label="Your Message"
                filled
                type="textarea"
              />
          <q-card-actions align="right">
            <q-btn flat label="Close" color="primary" @click="closeSms"/>
            <q-btn label="Send" color="primary" v-close-popup @click="sendSms"/>
          </q-card-actions>
        </q-form>
      </div>

      </q-card>
    </q-dialog>
    <q-dialog 
      v-model="showParentMobileModal"
    >
    <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section>
          <div class="text-h6">Set Parent Mobile Number</div>
        </q-card-section>

        <q-separator />
        <div class="q-pa-md">
          <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-md"
          >
            <q-input
              filled
              v-model="mobile"
              label="Parent Mobile Number"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />
          <q-card-actions align="right">
            <q-btn flat label="Close" color="primary" @click="closeSms"/>
            <q-btn label="Save" color="primary" v-close-popup @click="saveParentMobile"/>
          </q-card-actions>
        </q-form>
      </div>

      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import accountService from "../../../services/account";
import smsService from "../../../services/sms";
import store from "../../../store";

export default defineComponent({
  name: "AdminUserIndex",
  data() {
    return {
      title: "",
      description: "",
      current: 1,
      limit: 10,
      showViewModal: false,
      viewing: null,
      showSmsModal: false,
      showParentMobileModal: false,
      sending: null,
      admins: [],
      mobile: "",
      message: "",
    };
  },
  computed: {
    ...mapGetters({
      users: "allUsers",
    }),
  },
  mounted() {
    this.fetch();

    accountService
      .admins()
      .then((data) => {
        this.admins = data;
        this.loading = false;
      })
      .catch((errors) => {
        this.loading = false;
      });
  },
  methods: {
    fetch() {
      accountService
      .items({
          page: this.current,
          limit: this.limit,
        })
      .then((data) => {
        this.loading = false;
      })
      .catch((errors) => {
        this.loading = false;
      });
    },
    onReset() {},
    remove(user) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Are you sure to delete this user?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          userService
            .destroy(user.id)
            .then((data) => {
              this.loading = false;
            })
            .catch((errors) => {
              this.loading = false;
            });
        });
    },
    viewUser(user) {
      this.showViewModal = true;
      this.viewing = user;
    },
    showSms(user) {
      this.showSmsModal = true;
      this.sending = user;
      this.mobile = user.parent_mobile;
    },
    showParentMobile(user) {
      this.showParentMobileModal = true;
      this.sending = user;
      this.mobile = user.parent_mobile;
    },
    closeSms() {
      this.showParentMobileModal = false;
      this.showSmsModal = false;
      this.sending = null;
      this.mobile = null;
    },
    sendSms() {
      smsService.send({
        mobile: this.mobile,
        message: this.message,
        student_id: this.sending.id,
      }).then((data) => {
        this.closeSms();
        this.$q.dialog({
          title: "Success",
          message: "Your message has been successfully sent!",
        });
      })
      .catch((errors) => {
        this.loading = false;
        this.$q.dialog({
          title: "Error",
          message: "An error has occured!",
        });
      });
    },
    saveParentMobile() {
      smsService.update({
        mobile: this.mobile,
        student_id: this.sending.id,
      }).then((data) => {
        this.sending.parent_mobile = this.mobile;
        store.dispatch('updateUser', this.sending);
        this.closeSms();
      })
      .catch((errors) => {
        this.loading = false;
      });
    }
  },
  watch: {
    current(value) {
      this.fetch();
    }
  },
});
</script>
