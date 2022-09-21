<template>
  <header class="l-header">
    <div class="l-header__inner clearfix">
      <div class="c-header-icon js-hamburger">
        <div class="hamburger-toggle">
          <span class="bar-top"></span><span class="bar-mid"></span
          ><span class="bar-bot"></span>
        </div>
      </div>
      <div class="c-header-icon has-dropdown">
        <span class="c-badge c-badge--header-icon animated shake">12</span
        ><i class="material-icons">notifications</i>
        <div class="c-dropdown c-dropdown--notifications">
          <div class="c-dropdown__header"></div>
          <div class="c-dropdown__content"></div>
        </div>
      </div>
      <div class="c-search">
        <input
          class="c-search__input u-input"
          placeholder="Search..."
          type="text"
        />
      </div>
      <div class="header-icons-group">
        <div class="c-header-icon logout" @click="signOut">
          <i class="material-icons">logout</i>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style></style>
