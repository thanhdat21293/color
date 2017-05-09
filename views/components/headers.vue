<template>
    <div>
        <div id="header" class="container">
            <div class="row">
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-8">
                    <ul class="nav navbar-nav">
                        <li class="active">
                            <a href="/">Home</a>
                        </li>
                        <li><a href="#" data-toggle="modal" data-target="#login">Login</a></li>
                        <li><a href="#" data-toggle="modal" data-target="#register">Register</a></li>

                        <div class="modal fade" id="login" tabindex="-1" role="dialog"
                             aria-labelledby="exampleModalLabel">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <form method="post" action="/user/login">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span></button>
                                            <h4 class="modal-title" id="exampleModalLabel">Login</h4>
                                        </div>
                                        <div class="modal-body">
                                                <div class="form-group">
                                                    <label for="recipient-name" class="control-label">Username</label>
                                                    <input type="text" class="form-control" name="username">
                                                </div>
                                                <div class="form-group">
                                                    <label for="message-text" class="control-label">Password</label>
                                                    <input type="password" class="form-control" name="passwors">
                                                </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="submit" class="btn btn-primary">Login</button>
                                            <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="modal fade" id="register" tabindex="-1" role="dialog"
                             aria-labelledby="exampleModalLabel">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <form method="post" action="" v-on:submit.prevent="register()" id="form-register">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span></button>
                                            <h4 class="modal-title" id="exampleModalLabel">Register</h4>
                                        </div>
                                        <div class="modal-body">
                                                <div class="form-group" v-if="errUserRegister.length > 0">
                                                    <p class="text-danger"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> {{ errUserRegister }}</p>
                                                </div>
                                                <div class="form-group" v-if="registerSuccess.length > 0">
                                                    <p class="text-success">
                                                        <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
                                                        {{ registerSuccess }}
                                                        <a :href="href">{{ textLink }}</a>
                                                    </p>
                                                </div>
                                                <div class="form-group">
                                                    <label for="recipient-name" class="control-label">Username</label>
                                                    <input type="text" class="form-control" name="username" required>
                                                </div>
                                                <div class="form-group">
                                                    <label for="recipient-name" class="control-label">Email</label>
                                                    <input type="email" class="form-control" name="email" required>
                                                </div>
                                                <div class="form-group">
                                                    <label for="message-text" class="control-label">Password</label>
                                                    <input type="password" class="form-control" name="password" required>
                                                </div>
                                                <div class="form-group">
                                                    <label for="message-text" class="control-label">Confirm Password</label>
                                                    <input type="password" class="form-control" name="confirmpassword" required>
                                                </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="submit" class="btn btn-primary">Register</button>
                                            <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                errUserRegister: '',
                registerSuccess: '',
                text: '',
                href: ''
            }
        },
        props: ['things'],
        methods: {
            register(){
                axios.post('/user/register', {
						username: $("#form-register input[name=username]").val(),
						email: $("#form-register input[name=email]").val(),
						password: $("#form-register input[name=password]").val(),
						confirmpassword: $("#form-register input[name=confirmpassword]").val(),
					})
					.then(response => {
					    if(response.data.errUserRegister) {
					        this.registerSuccess = '';
                            this.errUserRegister = response.data.errUserRegister;
                        }
                        if(response.data.registerSuccess) {
                            this.errUserRegister = '';
                            this.registerSuccess = response.data.registerSuccess;
                            this.textLink = response.data.textLink;
                            this.href = response.data.href;
                        }
					})
					.catch(error => {
						this.errUserRegister = 'Error';
					});;
            }
        }
    }
</script>