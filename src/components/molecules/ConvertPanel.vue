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
                :value=compose
                :placeholder=composePlaceholder
        ></v-textarea>
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
    commandPlaceholder: 'e.g.) docker run nginx',
    composePlaceholder: 'version: 3\n' +
      'services:\n' +
      '    nginx:\n' +
      '        image: nginx',
  }),
  computed: {
    compose(): string {
      if (this.command.length === 0) {
        return '';
      }
      return convert(this.command);
    },
  },
});
</script>

<style scoped>
</style>
