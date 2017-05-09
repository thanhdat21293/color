<template>
    <div>
        <div id="container-color" v-if="dt.length > 0" class="container">
            <div class="item" v-for="i in dt">
                <div class="item_inner">
                    <div class="box-colors">
                        <span :style="{ 'backgroundColor': '#' + i.color1 }" :color="i.color1"
                              @click.stop.prevent="getColor(i.color1)"><abbr>Copy</abbr></span>
                        <span :style="{ 'backgroundColor': '#' + i.color2 }" :color="i.color2"
                              @click.stop.prevent="getColor(i.color2)"><abbr>Copy</abbr></span>
                        <span :style="{ 'backgroundColor': '#' + i.color3 }" :color="i.color3"
                              @click.stop.prevent="getColor(i.color3)"><abbr>Copy</abbr></span>
                        <span :style="{ 'backgroundColor': '#' + i.color4 }" :color="i.color4"
                              @click.stop.prevent="getColor(i.color4)"><abbr>Copy</abbr></span>
                        <span :style="{ 'backgroundColor': '#' + i.color5 }" :color="i.color5"
                              @click.stop.prevent="getColor(i.color5)"><abbr>Copy</abbr></span>
                    </div>
                    <div class="box-info">
                        <div class="box-name">{{i.name}}</div>
                        <div class="box-date"><i class="fa fa-calendar" aria-hidden="true"></i>{{ i.date }}</div>
                        <div class="box-author"><i class="fa fa-user" aria-hidden="true"></i> {{ i.author }} <i
                                class="fa fa-envelope-o" aria-hidden="true"></i> {{ i.author_email }}
                        </div>
                        <div class="box-like-dislike-share">
                            <span class="box-like"><i class="fa fa-thumbs-o-up"
                                                      aria-hidden="true"></i> {{ i.like }}</span>
                            <span class="box-dislike"><i class="fa fa-thumbs-o-down" aria-hidden="true"></i> {{ i.dislike }}</span>
                            <span class="share"> <i class="fa fa-share-alt" aria-hidden="true"></i>{{ i.share }}</span>
                        </div>
                        <div class="box-des">{{ i.description }}</div>
                        <a :href="'/color/' + i.id">View Detail</a>
                    </div>
                </div>
            </div>
            <div id="pagination" v-if="allpage > 1">
                <nav aria-label="...">
                    <ul class="pagination">
                        <li v-for="i in allpage">
                            <a :href="i + 1" v-if="page === i + 1" class="active" v-on:click.stop.prevent=""
                               v-model="page">{{i + 1}}</a>
                            <a :href="i + 1" v-else v-on:click.stop.prevent="search2(i + 1)" v-model="page">{{i +
                                1}}</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div v-else id="container-color" class="container">No colors.</div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                //page: 1
            }
        },
        props: ["dt", "allpage", "page"],
        methods: {
            search2(page) {
                this.page = page;
                this.$emit('search2');
                //console.log(this.page);
                $('#box-search input[type=submit]').trigger('click');
            },
            getColor(color){
                copyTextToClipboard(color)
            }
        }
    }
</script>