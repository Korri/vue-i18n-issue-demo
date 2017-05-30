<template>
  <div class="hello">
    <h1>{{ $t('hello_in') }} {{ $i18n.locale }}</h1>
  </div>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {
                msg: 'You'
            }
        }
    }
</script>

<i18n>
  {
    "en": {
      "hello_in": "Hello in"
    }
  }
</i18n>
