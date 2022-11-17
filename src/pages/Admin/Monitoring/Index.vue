<template>
  <div class="q-pa-md q-gutter-md">
    <h4 class="text-h4 q-mb-xs">Monitoring</h4>
    <q-list padding>
      <q-item>
        <q-item-section>
          <q-item-label class="text-h6">Chapter</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-h6">Student Access Count</q-item-label>
        </q-item-section>
      </q-item>
      <q-item v-ripple v-for="chapter in chapters" :key="chapter.id">
        <q-item-section>
          <q-item-label lines="1">{{ chapter.title }}</q-item-label>
          <q-item-label caption>{{ chapter.description }}</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label lines="1">{{ chapter.access_count || 0 }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { defineComponent } from "vue";
import chapterService from "../../../services/chapter";

export default defineComponent({
  name: "AdminChapterIndex",
  data() {
    return {
      title: "",
      description: "",
    };
  },
  computed: {
    ...mapGetters({
      chapters: "allChapters",
    }),
  },
  mounted() {
    chapterService
      .all()
      .then((data) => {
        this.loading = false;
      })
      .catch((errors) => {
        this.loading = false;
      });
  },
  methods: {
  },
});
</script>
