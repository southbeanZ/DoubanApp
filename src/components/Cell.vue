<template>
	<div class="m-cell" :class="label">
		<div class="u-cell-left">
			<slot name="icon"></slot>
			<span class="txt">{{txt}}</span>
		</div>
		<div class="u-cell-right">
			<slot name="right"></slot>
		</div>
	</div>
</template>
<style lang="scss">
.m-cell {
	position: relative;
	padding: 5px 10px;
	height: 24px;
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
	&.hot {
		&:before {
			content: '';
			position: absolute;
			left: 0;
			bottom: 0;
			height: 100%;
			width: 4px;
			background: #ff8447;
		}
	}
	&.recommend {
		&:before {
			content: '';
			position: absolute;
			left: 0;
			bottom: 0;
			height: 100%;
			width: 4px;
			background: #42bd56;
		}
	}
	.u-cell-left {
		display: inline-block;
		height: 100%;
		.txt {
			font-size: 14px;
			line-height: 24px;
		}
		.icon {
			display: inline-block;
			vertical-align: middle;
			width: 20px;
			height: 20px;
		}
	}
	.u-cell-right {
		display: inline-block;
		float: right;
		height: 100%;
		.u-btn {
			display: inline-block;
			height: 100%;
			.icon {
				vertical-align: middle;
				width: 20px;
				height: 20px;
			}
		}
	}
}
</style>
<script>
export default {
	props: {
		txt: {
			type: String,
			default: ''
		},
		label: {
			type: String,
			default: ''
		}
	}
}
</script>