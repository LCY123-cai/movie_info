<template>
  <base-box type="primary" title="电影">
    <template v-slot:title-addon>
      <div class="filter">
        <label class="active">最新</label>
        <label>高分</label>
        <label>动作</label>
        <label>剧情</label>
      </div>
      <div
        class="text-success"
        style="margin-left: auto; cursor: pointer"
        @click="$router.push({name: 'movie-create'})"
        v-if="$store.state.isUserLogin">
        <i class="el-icon-plus"></i>新增电影
      </div>
    </template>
    <div class="movie-list">
      <a
        class="movie-item"
        @click="$router.push({name: 'movie-detail', params: {id: movie.id}})"
        v-for="movie in movies"
        :key="movie.id">
        <img :src="movie.poster" :alt="movie.name">
        <p>{{ movie.name }} <strong>{{ movie.rating }}</strong></p>
      </a>
    </div>
  </base-box>
</template>

<script>
export default {
  data () {
    return {
      movies: []
    }
  },
  created () {
    // TODO: 调用接口服务获取数据列表
    this.movies = [
      {
        id: 1,
        name: '哪吒之魔童降世',
        poster: 'https://imgs.aixifan.com/o_1dflgds791p2otdr93e11qf1bmr.jpg',
        rating: 8.6
      },
      {
        id: 2,
        name: '绿皮书',
        poster: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=304162534,2965962807&fm=26&gp=0.jpg',
        rating: 8.6
      }
    ]
  }

}
</script>

<style lang="scss" scoped>
.filter {
  margin-left: 10px;
  label {
    margin-right: 10px;
    color: #9b9b9b;
    font-size: 13px;
    cursor: pointer;
    &.active {
      color: #000000;
    }
  }
}
.movie-list {
  .movie-item {
    display: block;
    margin: 10px;
    float: left;
    font-size: 13px;
    width: 114px;
    cursor: pointer;
    img {
      height: 160px;
      width: 100%;
      object-fit: cover;
    }
    p {
      text-align: center;
      strong {
        color: #e09015;
      }
    }
  }
}
</style>
