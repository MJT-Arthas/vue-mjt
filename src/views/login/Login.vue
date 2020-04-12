<template>
	<div id="login">
		<div class="loginWrap">
			<ul class="menuTab">
				<li :class="{'current' :item.current}" v-for="item in menuTab" :key="item.id" @click="toggleMenu(item)">{{ item.txt }}</li>
			</ul>
			<!-- 表单开始 -->
			<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="logoForm" size="meduim">

				<el-form-item prop="mail" class="itemForm">
					<label>邮箱</label>
					<el-input type="tetx" v-model="ruleForm.mail" autocomplete="off" maxlength="20"></el-input>
				</el-form-item>

				<el-form-item prop="password" class="itemForm">
					<label>密码</label>
					<el-input type="password" v-model="ruleForm.password" autocomplete="off" minlength="6" maxlength="20"></el-input>
				</el-form-item>

				<el-form-item prop="checkcode" class="itemForm">
					<label>验证码</label>
					<el-row :gutter="10">
							<el-col :span="14">
								<div class="grid-content bg-purple">
									<el-input v-model.number="ruleForm.checkcode" minlength="6" maxlength="6"></el-input>
								</div>
							</el-col>
						<el-col :span="10">
							<div class="grid-content bg-purple">
								<el-button type="success" @click="submitForm('ruleForm')" class="block">获取验证码</el-button>
							</div>
						</el-col>
					</el-row>
				</el-form-item>

				<el-form-item>
						<el-button type="danger" @click="submitForm('ruleForm')" class="loginBtn block">提交</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>
<script>
export default {
	name:'login',
	data(){
		var mail = (rule, value, callback) => {
				let reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
				if (!value) {
					return callback(new Error('请输入邮箱'));
				}
				else if(!reg.test(value)){
					return callback(new Error('邮箱格式错误'));
				}
				else
				{
					callback();
				}
		};
		var password = (rule, value, callback) => {
				let reg = /"^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z\\W]{6,20}$"/
				if (value === '') {
					callback(new Error('请输入密码'));
				}
				else if(!reg.test(value)){
					return callback(new Error('密码为6-20位字符'));
				} 
				else {
						callback();
				}
		};
		var checkcode = (rule, value, callback) => {
				let reg = /^\d{6}$/
				if (value === '') {
						callback(new Error('请输入验证码'));
				}
				else if(!reg.test(value)){
						return callback(new Error('验证码格式错误'));
				} 
				else {
						callback();
				}
		};
		return {
			menuTab: [
				{ txt :'登录', current: true },
				{ txt :'注册', current: false }
			],
			
			// 表单里面的数据
			ruleForm: {
				mail: '',
				password: '',
				checkcode: ''
			},
			rules: {
				mail: [
				{ validator: mail, trigger: 'blur' }
				],
				password: [
				{ validator: password, trigger: 'blur' }
				],
				checkcode: [
				{ validator: checkcode, trigger: 'blur' }
				]
			},
				
				
		}
	},
		created(){},
		mounted(){},
		methods: {
				submitForm(formName) {
						this.$refs[formName].validate((valid) => {
								if (valid) {
								alert('submit!');
								} 
								else {
								console.log('error submit!!');
								return false;
								}
						});
				},

				toggleMenu(data){
						this.menuTab.forEach(element => {
								element.current = false
						});
						data.current = true
				}
		}
}
</script>
<style lang="scss" scoped>
		#login{
				margin: 0;
				padding: 0;
				background-color: #344a5f;
				height: 100vh;
		}
		.loginWrap{
				width: 330px;
				margin: auto;
		}
		.menuTab {
				text-align: center;
				li {
						display: inline-block;
						width: 88px;
						line-height: 36px;
						font-size: 14px;
						color: white;
						border-radius: 2px;
						cursor: pointer;
				}
				.current {
						background-color:rgba(0, 0, 0, .1)
				}
		}
		.logoForm {
				margin-top: 29px;
				label {
						display: inline-block;
						margin-bottom: 3px;
						font-size: 14px;
						color: white;
				}
				.itemForm{
						margin-bottom: 13px;
				}
				.block{
						width: 100%;
						display: block;
				}
				.loginBtn{
						margin-top: 19px;
				}
		}
</style>