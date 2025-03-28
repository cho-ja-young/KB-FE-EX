<template>
  <div class="card card-body">
    <h2>VideoPlayer</h2>
  </div>
</template>

<script>
import { reactive, ref, inject } from 'vue';
import { useRoute, useRouter, onBeforeUpdate } from 'vue-router';

export default {
  name: 'VideoPlayer',
  components: { YoutubeVue3 },
  setup() {
    const videos = inject('videos');
    const playerRef = ref(null);
    const currentRout = useRoute();
    const router = useRouter();
    let videoInfo, currentIndex, prevVideoId, nextVideoId;
    videoInfo = reactive({
      video: videos.find((v) => v.id === currentRoute.params.id),
    });

    const getNavId = (to) => {
      videoInfo.video = videos.find((v) => v.id === to.params.id);
      currentIndex = videos.findIndex((v) => v.id === videoInfo.video.id);
      prevVideoId = videos[currentIndex - 1]
        ? videos[currentIndex - 1].id
        : null;
      nextVideoId = videos[currentIndex + 1]
        ? videos[currentIndex + 1].id
        : null;
    };
  },
};
</script>
