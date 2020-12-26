<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <div class="alert alert-danger" v-if="message">{{ message }}</div>
                        <h1>Login</h1>
                        <form @submit.prevent="loginMethod">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Email" v-model="login.email">
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" placeholder="Password" v-model="login.password">
                            </div>
                            <button class="form-control btn btn-primary" type="submit">Login</button>
                        </form>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Don't have an account? <a href="#">Register</a></small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            login: {
                email: '',
                password: ''
            },
            message: ''
        }
    },
    methods: {
        loginMethod() {
            if(this.login.email === 'admin@admin.com' && this.login.password === '123456')
            {
                localStorage.setItem('auth', this.login.email);
                this.$router.push('/profile');
            }
            else
            {
                this.message = 'Email or Password is incorrect.';
            }
        }
    }
}
</script>