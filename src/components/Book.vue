<template>
	<div class="m-book">
		<a href="" class="u-link">
			<img :src="pic" alt="" class="pic">
		</a>
		<p class="u-name">{{name}}</p>
		<div class="m-score">
			<div class="u-star">
				<span class="start" :class="{'none': score == 0,'half': score <= 1.5}"></span>
				<span class="start" :class="{'none': score <= 2.0,'half': score <= 3.5}"></span>
				<span class="start" :class="{'none': score <= 4.0,'half': score <= 5.5}"></span>
				<span class="start" :class="{'none': score <= 6.0,'half': score <= 7.5}"></span>
				<span class="start" :class="{'none': score <= 8.0,'half': score <= 9.5}"></span>
			</div>
			<span class="u-num">{{score}}</span>
		</div>
	</div>
</template>
<style lang="scss">
.m-book {
	display: block;
	width: 100px;
	// height: 147px;
	.u-link {
		display: block;
		width: 100px;
		height: 147px;
		.pic {
			width: 100%;
			height: 100%;
		}
	}
	.u-name {
		font-size: 14px;
		line-height: 20px;
		color: #494949;
	}
	.m-score {
		width: 100%;
		height: 20px;
		.u-star {
			display: inline-block;
			height: 100%;
			vertical-align: top;
			font-size: 0;
			.start {
				display: inline-block;
				width: 13px;
				height: 100%;
				background-size: 13px 13px;
				background-position: 50% 50%;
				background-repeat: no-repeat;
				background-image: url(../assets/images/rating_star_xsmall_on.png);
				&.half {
					background-image: url(../assets/images/rating_star_xsmall_half.png);
				}
				&.none {
					background-image: url(../assets/images/rating_star_xsmall_off.png);
				}
			}
		}
		.u-num {
			font-size: 14px;
			line-height: 20px;
			vertical-align: top;
			color: #ccc;
		}
	}
}
</style>
<script>
export default {
	props: {
		pic: {
			type: String,
			default: ""
		},
		name: {
			type: String,
			default: ""
		},
		score: {
			type: Number,
			default: ""
		},
	}
}
</script>