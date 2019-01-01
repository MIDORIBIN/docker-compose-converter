<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs6>
        <div class="title blue--text">Docker run command</div>
        <v-textarea
                rows="15"
                outline
                auto-grow
                solo
                clearable
                v-model=command
                :placeholder=commandPlaceholder
        ></v-textarea>
        <v-img
                src="https://www.docker.com/sites/default/files/vertical_large.png"
                contain
                height="38vh"
        ></v-img>
      </v-flex>
      <v-flex xs6>
        <div class="title orange--text">Docker Compose</div>
        <v-textarea
                rows="15"
                outline
                auto-grow
                solo
                v-model=compose
                :placeholder=composePlaceholder
        ></v-textarea>
        <v-btn
                absolute
                dark
                fab
                buttom
                right
                download="docker-compose.yml"
                :href="href"
                color="orange"
        >
          <v-icon>get_app</v-icon>
        </v-btn>
        <v-img
                src="https://raw.githubusercontent.com/docker/compose/master/logo.png"
                contain
                height="38vh"
        ></v-img>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import convert from '@/service/convert-docker-command.ts';

export default Vue.extend({
  data: () => ({
    command: '',
    compose: '',
    commandPlaceholder: 'e.g.) docker run nginx',
    composePlaceholder: 'version: 3\n' +
      'services:\n' +
      '    nginx:\n' +
      '        image: nginx',
  }),
  computed: {
    href() {
      const blob = new Blob([ this.compose ], { type : 'text/plain' });
      const url: string = URL.createObjectURL(blob);
      return url;
    },
  },
  watch: {
    command() {
      if (this.command.length === 0) {
        this.compose = '';
      }
      this.compose = convert(this.command);
    },
  },
});
</script>

<style scoped>
</style>
