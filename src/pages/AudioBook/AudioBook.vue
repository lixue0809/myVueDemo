<template>
  <div>
  	<m-header title="大连生态科技新城" fixed>
  			<a href="javascript:;" slot="right"><img class="m-icon-img margin-right-10" src="../../assets/images/ic_actionbar_search_icon.png"/></a>
  			<a href="javascript:;" slot="right"><img class="m-icon-img" src="../../assets/images/ic_chat_green.png"/></a>
    </m-header>
    <div class="work-banner" v-on:click="greet"></div>
    <div class="my-approval">
        <div>
            <mt-button type="default">0</mt-button>
            <span>待我审批</span>
        </div>
        <div>
            <mt-button type="default">0</mt-button>
            <span>出勤天数</span>
        </div>
        <div>
            <mt-button type="default">0</mt-button>
            <span>请假</span>
        </div>
        <div>
            <mt-button type="default">0</mt-button>
            <span>日报</span>
        </div>
    </div>
    <div class="">
       <h5>常用应用</h5>
    </div>



  </div>
</template>

<script>
  import mHeader from '../../components/header'
  import { Button } from 'mint-ui';

  export default {
    name: 'broadcast',
    components: {
      mHeader
    },
    methods: {
    greet: function (e) {
      // 方法内 `this` 指向 vm
      alert('Hello ' + this.name + '!')
        axios.get('./data/homeData').then((response) => {
        console.log(aaaaaaaaaaaaa)
        }).catch((error)=>{
          console.log(error)
        })
      }
    }

  }
</script>


<style lang="less">
.work-banner{
  background: url("../../assets/images/work/zjxc-bg.jpg") no-repeat center;
  height: 202px;
  background-size: cover;  
  width: 100%;
}
.my-approval{
  width:100%;
  height:1.6rem;
  border:1px solid #f0f0f0;
  display:flex;
  text-aline:center;
  padding-top:0.2rem;
      div{
        text-align:center;
        flex:1;
        span{
          display: inline-block;
          text-align: center;
          width: 100%;
         }
        button{
          display:inline-block;
          width: 1rem;
          height: 1rem;
              border: 0;
    border-radius: 0.15rem;
    background: #f4f4f4;
        }
      }
}
</style>