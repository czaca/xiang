<template>
  <div class="center">
    <div class="head">
      <router-link to="/centers">
        <i class="iconfont icon-fanhui1"></i>
      </router-link>
      <h4>猫眼电影</h4>
    </div>
    <input type="text" class="txt" placeholder="请输入手机号" v-model="username">
    <input type="password" id="password" class="password" placeholder="请输入您的密码"  v-model="password" >
    <button class="btn" @click="register">注册</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      userList: []
    };
  },
  methods: {
    register: function() {
      // (4) 得到用户名和密码,进行判断
      if (this.username === "") {
        alert("请输入用户名");
        return;
      }else{
        var reg=/^0?(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/g;
        if(!reg.test(this.username)){
          alert('请输入正确的电话号码')
          return;
        }
      }
      if (this.password === "") {
        alert("请输入密码");
        return;
      }else{
         var pass= /^.{6,}$/;
      if(!pass.test(this.password)){
        alert("密码不能少于六位");
        return;
      }
    }


      //（5）构建user对象
      let user = {};
      user.username = this.username;
      user.password = this.password;

      //（6）判断用户名是否已经被注册了
      for (let i = 0; i < this.userList.length; i++) {
        let value = this.userList[i];
        if (user.username === value.username) {
          alert("用户已经存在");
          return;
        }
      }

      //（7） 添加到userList
      this.userList.push(user);

      //（8） 将userList保存到本地
      localStorage.users = JSON.stringify(this.userList);

      alert("注册成功");
    }
  },

  //(2）当vue挂载上的时候，我们判断localStorage有没有users集合.有就给userList属性赋值
  mounted() {
    if (localStorage.users) {
      this.userList = JSON.parse(localStorage.users);
    }
  }
};
</script>
<style lang="less" scoped>
.head {
  display: flex;
  background: #e54847;
  height: 50px;
  .icon-fanhui1 {
    font-size: 30px;
    margin-left: 15px;
    line-height: 50px;
    color: #fff;
  }
  h4 {
    font-size: 18px;
    line-height: 50px;
    margin-left: 40%;
    color: #fff;
  }
}
.txt:focus{
  background: #ededed;
}
.txt {
  width: 92%;
  height: 25px;
  border: 0;
  margin-top: 10px;
  padding-left: 5px;
  margin-left: 10px;
  // background: #ededed;
  border-radius: 5px;
}
.password {
  border: 0;
  margin-top: 10px;
  margin-left: 10px;
  padding-left: 5px;
  width: 92%;
  height: 25px;
  // background: #ededed;
  border-radius: 5px;
}
.password:focus{
  background: #ededed;
}
.btn {
  width: 92%;
  height: 45px;
  border: 0;
  border-radius: 5px;
  background: #e54847;
  margin-left: 14px;
  margin-top: 15px;
  color: #fff;
  font-size: 20px;
  margin-bottom: 15px;
}
</style>
