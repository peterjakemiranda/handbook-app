<template>
  <div class="q-pa-md q-gutter-md">
    <q-page-sticky
      expand
      position="top-left"
      class="full-width"
      style="z-index: 1"
    >
      <q-breadcrumbs
        class="text-grey bg-white full-width q-px-lg q-py-sm text-body1"
      >
        <q-breadcrumbs-el
          to="/admin/chapters"
          icon="keyboard_arrow_left"
          label="All Chapters"
        />
        <q-breadcrumbs-el
          icon="local_library"
          :label="`${currentChapter.title} Questions`"
          v-if="currentChapter"
        />
      </q-breadcrumbs>
    </q-page-sticky>
    <div
      class="text-h5 q-mb-md"
      style="padding-top: 48px"
      v-if="currentChapter"
    >
      {{ currentChapter.title }}
    </div>
    <q-btn
      :to="`/admin/chapters/${$route.params.chapter_id}/questions/create`"
      color="primary"
      icon="add"
      label="Create Question"
    />
    <q-list padding>
      <q-item v-ripple v-for="question in questions" :key="question.id" class="full-width">
        <q-item-section>
          <q-item-label lines="1">{{ question.question }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <div class="q-gutter-sm">
            <q-btn
              flat
              round
              size="12px"
              icon="edit"
              :to="`/admin/chapters/${$route.params.chapter_id}/questions/${question.id}/edit`"
            >
              <q-tooltip anchor="top middle" self="bottom middle">
                Edit
              </q-tooltip>
            </q-btn>
            <q-btn
              flat
              round
              size="12px"
              icon="delete"
              @click.prevent="remove(question)"
            >
              <q-tooltip anchor="top middle" self="bottom middle">
                Delete
              </q-tooltip>
            </q-btn>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { defineComponent } from "vue";
import questionService from "../../../services/question";

export default defineComponent({
  name: "AdminQuestionIndex",
  data() {
    return {
      title: "",
    };
  },
  computed: {
    ...mapGetters({
      chapters: "allChapters",
      questions: "allQuestions",
    }),
    currentChapter() {
      return this.chapters.find(
        (c) => +c.id === +this.$route.params.chapter_id
      );
    },
  },
  mounted() {
    questionService
      .all(this.$route.params.chapter_id)
      .then((data) => {
        this.loading = false;
      })
      .catch((errors) => {
        this.loading = false;
      });
  },
  methods: {
    onReset() {},
    remove(question) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Are you sure to delete this question?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          questionService
            .destroy(question.id, question.chapter_id)
            .then((data) => {
              this.loading = false;
            })
            .catch((errors) => {
              this.loading = false;
            });
        });
    },
  },
});
</script>