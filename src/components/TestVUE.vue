<template>
  <div>
    <h1>TestVUE</h1>
    <h2>测试开发示例</h2>
    <div v-if='list.length'>
      <table align="center">
        <thead align="left">
          <tr>
            <th></th>
            <th>商品名称</th>
            <th>商品单价</th>
            <th>购买数量</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody align="left">
          <tr v-for='(item, index) in list' v-bind:key="item.id">
            <td>{{index + 1}}</td>
            <td>{{item.name}}</td>
            <td>{{item.price}}</td>
            <td>{{item.count}}</td>
            <td>
              <button @click='handleReduce(index)' :disabled='item.count === 1'>-</button>
              {{item.count}}
              <button @click='handleAdd(index)'>+</button>
            </td>
            <td>
              <button @click='handleRemove(index)'>移除</button>
            </td>
          </tr>
          <tr><td colspan="4">总价：￥ {{ totalPrice }}</td></tr>
        </tbody>
      </table>
    </div>
    <div v-else> 数据为空！</div>
    <div style="text-align: left;margin: 20px 0px 0px 40px;">
      姓名：<input v-model="test_message" placeholder="请输入"/> <span>{{ test_message }}</span>
      <br/>
      <br/>
      昵称：<input type="text" @input="handleInput" placeholder="请输入..."> <span>{{ message }}</span>
      <br/>
      <br/>
      爱好：<input type="text" v-model.lazy="like" placeholder="请输入..."> <span>{{ like }}</span>  // 延迟显示
      <br/>
      <br/>
      数字：<input type="text" v-model.number="number" placeholder="请输入..."><span>{{ typeof number }}</span>
      <br/>
      <br/>
      去空格：<input type="text" v-model.trim="trim_max" placeholder="请输入..."><span>{{ trim_max }}</span>
    </div>
  </div>
</template>
<script src="./service/TestVUE.js"></script>
