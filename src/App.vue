<template>
  <header>
    <div class="headerList">
      <img src="@/assets/logo.svg" alt="">
      <span class="ListTitle">Chalice Joker 的知识库</span>
    </div>
  </header>
  <section>
    <div class="sidebar">
      <div class="barTitle">
        <p>知识列表</p>
        <p>三</p>
      </div>
      <div class="bar-nav">
        <!-- <el-tree :data="data" :props="defaultProps" accordion @node-click="handleNodeClick" /> -->
        <el-tree :data="jsonTrees" :props="defaultProps" accordion @node-click="handleNodeClick" class="elTreeStyle"  />
      </div>
    </div>
    <article>
      this
    </article>
  </section>
</template>
<script setup>
const handleNodeClick = (jsonTrees) => {
  // console.log(jsonTrees)
}

const jsonTrees = [
  {
    showText: 'Level one 1',
    childList: [
      {
        showText: 'Level two 1-1',
        childList: [
          {
            showText: 'Level three 1-1-1',
          },
        ],
      },
    ],
  },
  {
    showText: 'Level one 2',
    childList: [
      {
        showText: 'Level two 2-1',
        childList: [
          {
            showText: 'Level three 2-1-1',
          },
        ],
      },
      {
        showText: 'Level two 2-2',
        childList: [
          {
            showText: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    showText: 'Level one 3',
    childList: [
      {
        showText: 'Level two 3-1',
        childList: [
          {
            showText: 'Level three 3-1-1',
          },
        ],
      },
      {
        showText: 'Level two 3-2',
        childList: [
          {
            showText: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
]
const defaultProps = {
  children: 'childList',
  label: 'showText',
}


</script>
<style>
* {
  margin: 0;
  padding: 0;
}

header {
  z-index: 9;
}

header .headerList {
  height: 50px;
  background-color: rgba(188, 223, 223, 0.483);
  display: flex;
  justify-content: start;
  align-items: center;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.276);

}

.headerList img {
  width: 40px;
  margin: 0 20px;
}

section {
  display: flex;

}

/* 侧边栏  */
div.sidebar {
  background-color: rgba(182, 155, 159, 0.521);
  /* height: 94vh; */
  height: 94.5vh;
}

/* 侧边栏标题 */
div.barTitle {
  display: flex;
  padding: 5px 20px;
  height: 40px;
  min-width: 200px;
  align-items: center;
  justify-content: space-between;
  background-color: #666699d1;
  color: #fff;
  font-weight: bolder;
  font-size: 20px;
}


/* .elTreeStyle{
  color: rgba(255, 255, 255);
  border: 1px solid black;
  height: 89vh;
  background-color: rgb(50, 50, 50);
} */
/* nav底色 */
/* .elTreeStyle:nth-child(n){
  background-color: green;
} */
/* 一级nav样式
.elTreeStyle:nth-child(n)>:nth-child(n)>:nth-child(n){
  background: rgb(29, 30, 48);
  padding: 10px 0;
} */
/* 二级nav样式 */
/* .elTreeStyle:nth-child(n)>:nth-child(n)>:nth-child(n)>div:nth-child(n)>:nth-child(n){
  background-color: rgb(31, 36, 85);
  padding: 10px 0;
}
.elTreeStyle:nth-child(n)>:nth-child(n)>:nth-child(n)>div:nth-child(n)>div:nth-child(n)>div:nth-child(n){
  background-color: rgb(5, 93, 125);
  padding: 10px 0;
}
.elTreeStyle:nth-child(n)>:nth-child(n)>:nth-child(n)>div:nth-child(n)>div:nth-child(n)>:nth-child(n):hover{
  background-color: aqua;
}
.elTreeStyle:nth-child(n)>:nth-child(n)>:nth-child(n)>div:nth-child(n)>div:nth-child(n)>div:nth-child(n)>*:hover{
  background-color: aqua;
} */

.el-tree{
  height: 100%;
  background-color: gainsboro;
}
/* .el-tree-node{
  color: #000;
  background-color: rgba(54, 65, 100, 0.545);
} */
.el-tree-node__content{
  padding: 10px 0;
  background-color: pink;
  height: 100%;
}
.el-tree-node__content:hover{
  background-color: aquamarine;
}
.el-tree-node__children{
  background-color: hotpink;
  /* padding: 10px 0; */
}
.iscurrent{
  background-color: aqua;
}
</style>
