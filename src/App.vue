<script>
import { RouterLink, RouterView } from 'vue-router'
import { defineComponent } from 'vue';
import { DownOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    DownOutlined,
  },
});
</script>

<template>
  <div>
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="100" />

      <div class="wrapper">
        <nav>
          <span v-if="$cookies.get('token') != null&&$cookies.get('token') != ''">
            <RouterLink to="/user">图库</RouterLink>
            <RouterLink to="/compose">新内容</RouterLink>
            <RouterLink to="/manage">分类</RouterLink>
            <RouterLink to="/profile">个人设置</RouterLink>
            <RouterLink to="/domain">域名设置</RouterLink>
            <RouterLink to="/clean">清理七牛云</RouterLink>
            <RouterLink to="/redirect" target="_blank">网站</RouterLink>
            <RouterLink to="/logout">退出</RouterLink>
          </span>
          <span v-else>
            <RouterLink to="/">首页</RouterLink>
            <RouterLink to="/login">登入</RouterLink>
            <RouterLink to="/reg">注册</RouterLink>
          </span>
        </nav>
      </div>
    </header>
  </div>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  display: block;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  font-size: 14px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
