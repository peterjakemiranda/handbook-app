<template>
  <div class="q-pa-md">
    <div class="text-h5 q-py-md">{{ id ? "Update" : "Create" }} Question</div>

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
      style="max-width: 800px"
    >
      <q-select
        filled
        map-options
        v-model="chapter"
        :options="chapterOptions"
        label="Chapter"
      />

      <q-input filled v-model="question" label="Question" />

      <q-input bottom-slots label="Add answer choices" v-model="choice">
        <template v-slot:hint>
          You can add multiple choices
        </template>

        <template v-slot:append>
          <q-btn round dense color="primary" icon="add" @click.prevent="addChoice"/>
        </template>
      </q-input>

      <div class="text-title" v-if="choices.length">Choices (Mark 1 Correct Answer)</div>
      <q-list>
      <template v-for="choice in choices" :key="choice.value">
        <q-item tag="label" v-ripple>
            <q-radio v-model="answer" :val="choice.value" :label="choice.label"/>
            <q-btn round dense flat color="red" icon="delete" @click.prevent="deleteChoice(choice.value)"/>
        </q-item>
      </template>
      </q-list>

      <div class="q-gutter-lg q-pa-lg">
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn
          label="Back"
          type="submit"
          :to="`/admin/chapters/${$route.params.chapter_id}/questions`"
        />
      </div>
    </q-form>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import chapterService from "../../../services/chapter";
import questionService from "../../../services/question";
import { mapGetters, mapMutations } from "vuex";

export default defineComponent({
  name: "AdminQuestionForm",
  data() {
    return {
      id: "",
      question: "",
      content: "",
      chapter: "",
      answer: null,
      choices: [],
    };
  },
  computed: {
    ...mapGetters({
      chapters: "allChapters",
      questions: "allQuestions",
    }),
    chapterOptions() {
      return this.chapters.map((c) => ({ label: c.title, value: c.id }));
    },
  },
  mounted() {
    if (!this.chapters.length) {
      chapterService
        .all()
        .then((data) => {
          this.loading = false;
          this.setCurrentChapter();
        })
        .catch((errors) => {
          this.loading = false;
        });
    } else {
      this.setCurrentChapter();
    }
    if (this.$route.params.id) {
      questionService
        .show(this.$route.params.id)
        .then((data) => {
          this.id = data.id;
          this.chapter_id = data.chapter_id;
          this.question = data.question;
          this.answer = +data.answer;
          this.choices = JSON.parse(data.options);
          this.loading = false;
        })
        .catch((errors) => {
          this.loading = false;
        });
    }
  },
  methods: {
    onSubmit() {
      this.id ? this.update() : this.save();
    },
    save() {
      if (!this.answer) {
        this.$q.dialog({
            title: "Error!",
            message: "Please select 1 correct answer to the choices",
          });
          return;
      }
      if (this.choices.length < 2) {
        this.$q.dialog({
            title: "Error!",
            message: "Please add atleast 2 answer choices",
          });
          return;
      }
      questionService
        .store({
          question: this.question,
          answer: this.answer,
          chapter_id: this.chapter.value,
          options: JSON.stringify(this.choices),
        })
        .then((data) => {
          this.loading = false;
          this.$router.push(
            `/admin/chapters/${this.$route.params.chapter_id}/questions`
          );
        })
        .catch((errors) => {
          this.loading = false;
        });
    },
    update() {
      questionService
        .update(this.id, {
          question: this.question,
          content: this.content,
          chapter_id: this.chapter.value,
        })
        .then((data) => {
          this.loading = false;
          this.$router.push(
            `/admin/chapters/${this.$route.params.chapter_id}/questions`
          );
        })
        .catch((errors) => {
          this.loading = false;
        });
    },
    addChoice() {
      this.choices.push({value: this.choices.length + 1, label: this.choice});
      this.choice = null;
    },
    deleteChoice(id) {
      const index = this.choices.findIndex(c => c.value === id);
      this.choices.splice(index, 1);
    },
    setCurrentChapter() {
      this.chapter = this.chapterOptions.find(
        (o) => +o.value === +this.$route.params.chapter_id
      );
    },
    onReset() {},
  },
  watch: {
    chapters(chapters) {},
  },
});
</script>
