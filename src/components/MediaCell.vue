<template>
	<div class="m-mediacell">
		<div class="m-media-con">
			<div class="u-con">
				<slot name="title"></slot>
				<slot name="desc"></slot>
			</div>
			<img :src="pic" class="u-pic">
		</div>
		<div class="u-media-info">
			<span class="author">{{author}}</span>
			<span class="column">{{column}}</span>
		</div>
	</div>
</template>
<style lang="scss">
.m-mediacell {
	position: relative;
	padding: 10px;
	&:after {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 1px;
		background: #ddd;
		transform: scaleY(.5);
	}
	.m-media-con {
		&:after {
			content: "";
			display: block;
			clear: both;
		}
		.u-con {
			display: inline-block;
			width: 100%;
			box-sizing: border-box;
			margin-left: -100px;
			padding-left: 100px;
			.title {
				font-size: 17px;
        line-height: 22px;
        color: #333;
        font-weight: bold;
			}
			.desc {
				font-size: 12px;
        color: #939393;
			}
		}
		.u-pic {
			float: right;
			display: block;
			width: 94px;
			height: 94px;
		}
	}
	.u-media-info {
		position: relative;
		padding: 5px 0 10px;
		font-size: 12px;
		color: #bfbfbf;
		&:before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			width: 20px;
      height: 1px;
      background: #eee;
		}
		.author {

		}
		.column {
			float: right;
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
		author: {
			type: String,
			default: ""
		},
		column: {
			type: String,
			default: ""
		}
	}
}
</script>