<template>
	<div>
		<div id="container-color" v-if="dt" class="container">
			<div class="item" v-for="i in dt">
				<a :href="i.id">
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
		</div>
		<div v-else id="container-color" class="container">No colors.</div>
	</div>
</template>
<script>
    // Vue
    export default {
        data() {
            return {

            }
        }
    }
</script>