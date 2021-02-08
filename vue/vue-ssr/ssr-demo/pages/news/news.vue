<template>
  <div>
    <h2>news page</h2>
    <p>newsId: {{$route.params.newsId}}</p>
    <ul>
      <li><a href="/">home</a></li>
      <li><a href="/news/123">news-1</a></li>
      <li><a href="/news/abc">news-2</a></li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>