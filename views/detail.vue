<template>
	<div>
        <div id="container-color-detail" v-if="dt" class="container">
			<div class="item-detail" v-for="i in dt">
                <div class="item_inner-detail">
                    <div class="box-colors-detail">
                        <a :href="i.color1" @click.stop.prevent="searchcolor(i.color1)"><span :style="{ 'backgroundColor': '#' + i.color1 }"></span></a>
                        <a :href="i.color2" @click.stop.prevent="searchcolor(i.color2)"><span :style="{ 'backgroundColor': '#' + i.color2 }"></span></a>
                        <a :href="i.color3" @click.stop.prevent="searchcolor(i.color3)"><span :style="{ 'backgroundColor': '#' + i.color3 }"></span></a>
                        <a :href="i.color4" @click.stop.prevent="searchcolor(i.color4)"><span :style="{ 'backgroundColor': '#' + i.color4 }"></span></a>
                        <a :href="i.color5" @click.stop.prevent="searchcolor(i.color5)"><span :style="{ 'backgroundColor': '#' + i.color5 }"></span></a>
                    </div>
                    <div class="box-info-detail">
                        <div class="box-name-detail">{{i.name}}</div>
                        <div class="box-date-detail"><i class="fa fa-calendar" aria-hidden="true"></i>{{ i.date }}</div>
                        <div class="box-author-detail">
                            <i class="fa fa-user" aria-hidden="true"></i> {{ i.author }}
                            <i class="fa fa-envelope-o" aria-hidden="true"></i> {{ i.author_email }}
                        </div>
                        <div class="box-like-dislike-share-detail">
                            <span class="box-like-detail"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> {{ i.like }}</span>
                            <span class="box-dislike-detail"><i class="fa fa-thumbs-o-down" aria-hidden="true"></i> {{ i.dislike }}</span>
                            <span class="share-detail"> <i class="fa fa-share-alt" aria-hidden="true"></i>{{ i.share }}</span>
                        </div>
                        <div class="box-des-detail">{{ i.description }}</div>
                    </div>
                </div>
			</div>
		</div>
		<div v-else id="container-color-detail">No colors.</div>

		<div class="error" v-if="errMsg">
		    {{ errMsg }}
		</div>
		<div class="related container" v-if="listColor.length > 0">
		    <h2>Related Colors</h2>
            <div class="related-inner" v-for="i in listColor">
                <div class="box-related">
                    <div class="related-color">
                        <span :style="{ 'backgroundColor': '#' + i.color1 }"></span>
                        <span :style="{ 'backgroundColor': '#' + i.color2 }"></span>
                        <span :style="{ 'backgroundColor': '#' + i.color3 }"></span>
                        <span :style="{ 'backgroundColor': '#' + i.color4 }"></span>
                        <span :style="{ 'backgroundColor': '#' + i.color5 }"></span>
                    </div>
                    <div class="related-info">
                        <h3>{{ i.name }}</h3>
                        <div class="related-author"><i class="fa fa-user" aria-hidden="true"></i> {{ i.author }}</div>
                        <div class="box-social">
                            <span class="related-like"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> {{ i.like }}</span>
                            <span class="related-dislike"><i class="fa fa-thumbs-o-down" aria-hidden="true"></i> {{ i.dislike }}</span>
                            <span class="related-share"> <i class="fa fa-share-alt" aria-hidden="true"></i>{{ i.share }}</span>
                        </div>
                    </div>
                </div>
            </div>
		</div>
		<div class="related container" v-else>No related colors.</div>
	</div>
</template>
<script>
    // Vue
    export default {
        data() {
            return {
				arrSearch: [],
				listColor: [],
				errMsg: ''
            }
        },
        methods: {
            searchcolor(color){
                console.log(this);
                let inArr = this.arrSearch.indexOf(color);
                if(inArr >= 0){
                    this.arrSearch.splice(inArr, 1);
                }else{
                    this.arrSearch.push(color);
                }

                if(this.arrSearch.length > 0){
                    axios.post('/searchcolor', {
                            colorArr: this.arrSearch
                        })
                        .then(response => {
                            console.log(response);
                            this.listColor = response.data.data;
                        })
                        .catch(error => {
                            this.listColor = [];
                            this.errMsg = 'Error';
                        });;
                }else{
                    this.listColor = [];
                }
            }
        }
    }
</script>