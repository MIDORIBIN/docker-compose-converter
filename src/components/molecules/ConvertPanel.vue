<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs6>
        <v-textarea
                outline
                label="Docker run command"
                v-model=command
        ></v-textarea>
      </v-flex>
      <v-flex xs6>
        <v-textarea
                outline
                label="docker-compose"
                :value=compose
        ></v-textarea>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import convert from '@/service/convert-docker-command.ts';

export default Vue.extend({
  data: () => ({
    command: 'docker run nginx',
  }),
  computed: {
    compose(): string {
      return convert(this.command);
    },
  },
});
</script>

<style scoped>
</style>
