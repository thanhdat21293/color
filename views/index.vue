<template>
	<div>
		<headers></headers>
		<div id="box-search" class="container">
			<form name="form-search" method="post" v-on:submit.prevent="findcolor()">
				<div class="div-search">
					<input type="text" name="search" placeholder="Color" v-model="search">
				</div>
				<div class="div-select">
					<select v-model="selected" name="sort" v-on:change="search1()">
						<option value="all">--</option>
						<option value="like">Like</option>
						<option value="random">Ramdom</option>
						<option value="latest">Lastest</option>
					</select>
				</div>
				<input type="submit" name="find" value="" style="display:none">
			</form>
		</div>
		<boxcolor :dt="dt" :allpage="allpage" :page="page" v-on:search2="searchParent"></boxcolor>
	</div>
</template>
<script>
    // Vue
    export default {
        data() {
            return {
                search: '',
                selected: 'all',
				page: 1,
				dt: [],
				allpage: '',
				errMsg: ''
            }
        },
        methods: {
            search1() {
                this.page = 1;
                $('#box-search input[type=submit]').trigger('click');
			},
			findcolor(){
				axios.post('/searchcolor', {
						search: this.search,
						selected: this.selected,
						page: this.page
					})
					.then(response => {
						this.dt = response.data.data;
						this.allpage = parseInt(response.data.allpage);
						this.page = response.data.page;
						$("html, body").animate({ scrollTop: 0 }, "fast");
					})
					.catch(error => {
						this.dt = [];
						this.errMsg = 'Error';
					});;
			},
			searchParent () {
			    this.page = this.$children[1].page;
			}
        },
		watch: {
		    search: function(val) {
		        this.page = 1;
                $('#box-search input[type=submit]').trigger('click');
			}
		}
    }
</script>