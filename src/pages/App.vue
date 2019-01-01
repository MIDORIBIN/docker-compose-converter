<template>
  <App>
    <template slot="header">
      <v-toolbar app color="primary">
        <v-toolbar-title class="headline text-uppercase">
          <span class="white--text">Docker Compose Converter</span>
        </v-toolbar-title>
      </v-toolbar>
    </template>
    <template slot="body">
      <ConvertPanel></ConvertPanel>
    </template>
  </App>
</template>

<script lang="ts">
import Vue from 'vue';
import App from '@/components/templates/App.vue';
import ConvertPanel from '@/components/molecules/ConvertPanel.vue';

export default Vue.extend({
  components: {
    App,
    ConvertPanel,
  },
});
</script>
