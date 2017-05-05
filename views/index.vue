<template>
	<div>
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
		<div id="container-color" v-if="dt" class="container">
			<div class="item" v-for="i in dt">
				<a :href="'/color/' + i.id">
					<div class="item_inner">
						<div class="box-colors">
							<span :style="{ 'backgroundColor': '#' + i.color1 }"></span>
							<span :style="{ 'backgroundColor': '#' + i.color2 }"></span>
							<span :style="{ 'backgroundColor': '#' + i.color3 }"></span>
							<span :style="{ 'backgroundColor': '#' + i.color4 }"></span>
							<span :style="{ 'backgroundColor': '#' + i.color5 }"></span>
						</div>
						<div class="box-info">
							<div class="box-name">{{i.name}}</div>
							<div class="box-date"><i class="fa fa-calendar" aria-hidden="true"></i>{{ i.date }}</div>
							<div class="box-author"><i class="fa fa-user" aria-hidden="true"></i> {{ i.author }} <i class="fa fa-envelope-o" aria-hidden="true"></i> {{ i.author_email }} </div>
							<div class="box-like-dislike-share">
								<span class="box-like"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> {{ i.like }}</span>
								<span class="box-dislike"><i class="fa fa-thumbs-o-down" aria-hidden="true"></i> {{ i.dislike }}</span>
								<span class="share"> <i class="fa fa-share-alt" aria-hidden="true"></i>{{ i.share }}</span>
							</div>
							<div class="box-des">{{ i.description }}</div>
						</div>
					</div>
				</a>
			</div>
			<div id="pagination" v-if="allpage > 1">
				<ul>
					<li v-for="i in allpage">
						<a :href="i + 1" v-on:click.stop.prevent="search2(i + 1)" v-model="page">{{i + 1}}</a>
					</li>
				</ul>
			</div>
		</div>
		<div v-else id="container-color" class="container">No colors.</div>
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
			search2(page) {
                this.page = page;
                $('#box-search input[type=submit]').trigger('click');
			},
			findcolor(){
				axios.post('/searchcolor', {
						search: this.search,
						selected: this.selected,
						page: this.page
					})
					.then(response => {
					    console.log(response.data.allpage);
						this.dt = response.data.data;
						this.allpage = parseInt(response.data.allpage);
						this.page = response.data.page;
						$("html, body").animate({ scrollTop: 0 }, "fast");
					})
					.catch(error => {
						this.dt = [];
						this.errMsg = 'Error';
					});;
			}
        },
		watch: {
		    search: (val) => {
                $('#box-search input[type=submit]').trigger('click');
			}
		}
    }
</script>