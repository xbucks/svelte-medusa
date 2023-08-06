<script lang="ts">
	// Product interface
	interface Product {}

	export let product: any;
	console.log(product);
</script>

<a href={`/products/${product.handle}`}>
	<div class="grid gap-10">
		<div>
			<img src={product.thumbnail} alt={product.name} class="w-full h-96 object-cover" />
		</div>
		<div class="grid grid-cols-2">
			<div>
				<h3 class="font-bold">{product.title}</h3>
				<p class="text-gray-600">{product.description}</p>
			</div>
			<p class="text-right font-bold text-xl">${product.variants[0].prices[0].amount / 100}</p>
		</div>
	</div>
</a>
