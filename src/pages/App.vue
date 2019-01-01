<template>
  <App>
    <template slot="header">
      <v-toolbar app>
        <v-toolbar-title class="headline text-uppercase">
          <span>Vuetify</span>
          <span class="font-weight-light">MATERIAL DESIGN</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
                flat
                href="https://github.com/vuetifyjs/vuetify/releases/latest"
                target="_blank"
        >
          <span class="mr-2">Latest Release</span>
        </v-btn>
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
  data: () => ({
  }),
});
</script>
