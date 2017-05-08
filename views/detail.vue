<template>
	<div>
		<headers></headers>
        <div id="container-color-detail" v-if="dt" class="container">
			<div class="item-detail" v-for="i in dt">
                <div class="item_inner-detail">
                    <div class="box-colors-detail">
                        <a :class="{active: isActive1}" :href="i.color1" @click.stop.prevent="searchcolor(i.color1, i.id, 1)"><span :style="{ 'backgroundColor': '#' + i.color1 }"></span></a>
                        <a :class="{active: isActive2}" :href="i.color2" @click.stop.prevent="searchcolor(i.color2, i.id, 2)"><span :style="{ 'backgroundColor': '#' + i.color2 }"></span></a>
                        <a :class="{active: isActive3}" :href="i.color3" @click.stop.prevent="searchcolor(i.color3, i.id, 3)"><span :style="{ 'backgroundColor': '#' + i.color3 }"></span></a>
                        <a :class="{active: isActive4}" :href="i.color4" @click.stop.prevent="searchcolor(i.color4, i.id, 4)"><span :style="{ 'backgroundColor': '#' + i.color4 }"></span></a>
                        <a :class="{active: isActive5}" :href="i.color5" @click.stop.prevent="searchcolor(i.color5, i.id, 5)"><span :style="{ 'backgroundColor': '#' + i.color5 }"></span></a>
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
                        <span :style="{ 'backgroundColor': '#' + i.color1 }" @click.stop.prevent="getColor(i.color1)"><abbr>Copy</abbr></span>
                        <span :style="{ 'backgroundColor': '#' + i.color2 }" @click.stop.prevent="getColor(i.color2)"><abbr>Copy</abbr></span>
                        <span :style="{ 'backgroundColor': '#' + i.color3 }" @click.stop.prevent="getColor(i.color3)"><abbr>Copy</abbr></span>
                        <span :style="{ 'backgroundColor': '#' + i.color4 }" @click.stop.prevent="getColor(i.color4)"><abbr>Copy</abbr></span>
                        <span :style="{ 'backgroundColor': '#' + i.color5 }" @click.stop.prevent="getColor(i.color5)"><abbr>Copy</abbr></span>
                    </div>
                    <div class="related-info">
                        <h3>{{ i.name }}</h3>
                        <div class="related-author"><i class="fa fa-user" aria-hidden="true"></i> {{ i.author }}</div>
                        <div class="box-social">
                            <span class="related-like"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> {{ i.like }}</span>
                            <span class="related-dislike"><i class="fa fa-thumbs-o-down" aria-hidden="true"></i> {{ i.dislike }}</span>
                            <span class="related-share"> <i class="fa fa-share-alt" aria-hidden="true"></i>{{ i.share }}</span>
                        </div>
                        <a :href="'/color/' + i.id">View Detail</a>
                    </div>
                </div>
            </div>
		</div>
	</div>
</template>
<script>
    // Vue
    export default {
        data() {
            return {
				arrSearch: [],
				listColor: [],
				errMsg: '',
				isActive1: false,
				isActive2: false,
				isActive3: false,
				isActive4: false,
				isActive5: false,
            }
        },
        methods: {
			getColor(color){
			    copyTextToClipboard(color)
			},
            searchcolor(color, id, numberColor){
                if(numberColor === 1){
                    this.isActive1 = !this.isActive1;
                    this.isActive2 = false;
                    this.isActive3 = false;
                    this.isActive4 = false;
                    this.isActive5 = false;
                }else if(numberColor === 2){
                    this.isActive2 = !this.isActive2;
                    this.isActive1 = false;
                    this.isActive3 = false;
                    this.isActive4 = false;
                    this.isActive5 = false;
                }else if(numberColor === 3){
                    this.isActive3 = !this.isActive3;
                    this.isActive2 = false;
                    this.isActive1 = false;
                    this.isActive4 = false;
                    this.isActive5 = false;
                }else if(numberColor === 4){
                    this.isActive4 = !this.isActive4;
                    this.isActive2 = false;
                    this.isActive3 = false;
                    this.isActive1 = false;
                    this.isActive5 = false;
                }else if(numberColor === 5){
                    this.isActive5 = !this.isActive5;
                    this.isActive2 = false;
                    this.isActive3 = false;
                    this.isActive4 = false;
                    this.isActive1 = false;
                }else{}

                let inArr = this.arrSearch.indexOf(color);
                if(inArr >= 0){
                    this.arrSearch.splice(inArr, 1);
                }else{
                    this.arrSearch = [color];
                }

                //this.arrSearch = [color];
                if(this.arrSearch.length > 0){
                    axios.post('/colorrelated', {
                            colorArr: this.arrSearch,
                            idColor: id
                        })
                        .then(response => {
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