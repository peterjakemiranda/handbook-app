<template>
  <div class="q-pa-lg">
    <q-page-sticky
      expand
      position="top-left"
      class="full-width"
      style="z-index: 1"
    >
      <q-breadcrumbs
        class="text-grey bg-white full-width q-px-lg q-py-sm text-body1"
      >
        <q-breadcrumbs-el to="/" icon="menu_book" label="My Handbook" />
        <q-breadcrumbs-el icon="local_library" label="Search" />
      </q-breadcrumbs>
    </q-page-sticky>
    <h5 class="text-h5 text-bold q-my-md q-pt-lg" v-if="article">
      {{ article.title }}
    </h5>
    <div class="text-center" v-if="loading">
      <q-spinner-bars
        color="primary"
        size="2em"
      />
    </div>
    <div v-else>
      <div v-for="section in sections" :key="section.id" style="height: 450px">
        <h6
          :id="`section-${section.id}`"
          class="text-h6 q-my-md"
          style="line-height: 1.6rem"
          v-if="section.title"
        >
          <q-icon
            :name="section.bookmarked ? 'star' : 'star_outline'"
            :color="section.bookmarked ? 'yellow-9' : 'primary'"
            clickable
            @click="bookmark(section)"
          />
          {{ titleCase(section.title) }}
        </h6>
        <span v-else :id="`section-${section.id}`"></span>
        <div v-html="section.content" class="text-body1"></div>
      </div>
      <q-btn v-if="article && article.prev_chapter" label="Previous Chapter" color="primary" @click="goToPrevChapter" class="q-mr-sm"/>
      <q-btn :label="article && article.next_chapter ? 'Continue to Next Chapter' : 'Done'" color="primary" @click="showQuestion = true" v-if="article && article.next_chapter && questions.length"/>
    </div>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="list" color="primary" @click="tableOfContents = true" />
    </q-page-sticky>
    <q-dialog v-model="tableOfContents">
      <q-card class="full-width">
        <q-card-section class="q-pa-sm">
          <div class="text-h6 q-pa-md">Sections</div>
          <q-list separator>
            <q-item
              v-for="section in sections"
              :key="section.id"
              v-close-popup="!!section.id"
              :clickable="!!section.id"
              @click="gotoSection(section)"
            >
              <q-item-section>{{
                section.title ? titleCase(section.title) : "Introduction"
              }}</q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
        <q-card-section class="row items-center justify-end">
          <q-btn flat label="Close" color="primary" v-close-popup />
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog 
    v-model="showQuestion"
    >
    <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section>
          <div class="text-h6">Questions</div>
        </q-card-section>

        <q-separator />

        <q-card-section style="max-height: 50vh" class="scroll">
          <q-list padding>
            <q-item v-ripple v-for="(question, index) in questions" :key="question.id" class="full-width">
              <q-item-section>
                <q-item-label lines="1">{{ question.question }}</q-item-label>
                <q-item-label caption>
                  <q-option-group
                    v-if="question"
                    v-model="answers[index]"
                    :options="JSON.parse(question.options)"
                    color="primary"
                  />
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn label="Submit & Continue" color="primary" @click.prevent="submitAnswer"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import sectionService from "../../services/section";
import questionService from "../../services/question";
import chapterService from "../../services/chapter";
import bookmarkService from "../../services/bookmark";
import store from "../../store";

export default defineComponent({
  name: "ViewSection",
  data() {
    return {
      loading: false,
      article: null,
      floatAction: false,
      tableOfContents: false,
      showQuestion: false,
      answers: [],
    };
  },
  computed: {
    ...mapGetters({
      chapters: "allChapters",
      sections: "allSections",
      questions: "allQuestions",
    }),
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.article = this.chapters.find((c) => +c.id === +this.$route.params.id);
      this.loading = true;
      if (!this.article) {
        chapterService
          .show(this.$route.params.id)
          .then((data) => {
            this.article = data;
          })
          .catch((err) => {});
      }
      sectionService
        .all(this.$route.params.id)
        .then((data) => {
          this.loading = false;
        })
        .catch((errors) => {
          this.loading = false;
        });

      questionService
        .all(this.$route.params.id)
        .then((data) => {
          this.loading = false;
        })
        .catch((errors) => {
          this.loading = false;
        });
    },
    titleCase(str) {
      return str
        .split(" ")
        .map(function (val) {
          return val.charAt(0).toUpperCase() + val.substr(1).toLowerCase();
        })
        .join(" ");
    },
    bookmark(section) {
      const bookmark = !section.bookmarked;
      const payload = Object.assign({}, section);
      payload.bookmarked = bookmark;
      store.dispatch("updateSection", payload);

      this.$q.dialog({
        title: bookmark ? "Bookmark Added!" : "Bookmark Removed!",
        message: `${this.titleCase(section.title)}`,
      });

      bookmarkService
        .bookmark(section.id, bookmark)
        .then((data) => {
          this.loading = false;
        })
        .catch((errors) => {
          this.loading = false;
        });
    },
    gotoSection(section) {
      this.goToHash(`#section-${section.id}`);
    },
    goToHash(hash) {
      const self = this;
      const routeHash = hash || self.$route.hash;
      setTimeout(function () {
        self.$nextTick(() => {
          if (routeHash) {
            const topOfElement = document.querySelector(routeHash)
              ? document.querySelector(routeHash).offsetTop - 160
              : 0;
            window.scroll({ top: topOfElement, behavior: "smooth" });
          }
        });
      }, 500);
    },
    submitAnswer() {
      const correctAnswers = JSON.stringify(this.questions.map(q => +q.answer));
      const answers = JSON.stringify(this.answers);
      if(answers !== correctAnswers) {
        this.$q.dialog({
            title: "Incorrect!",
            message: "One or more answers are incorrect! Please try answering again.",
          });
          return;
      }
      this.showQuestion = false;
      this.answers = [];
      if(this.article.next_chapter) {
        this.$router.push(`/article/${this.article.next_chapter}`);
      }
    },
    goToPrevChapter() {
      this.$router.push(`/article/${this.article.prev_chapter}`);
    }
  },
  watch: {
    loading(loading) {
      if (loading) return;
      this.goToHash();
    },
    $route (to, from){
        this.init();
    }
  },
});
</script>
