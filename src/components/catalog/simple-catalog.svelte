<script lang="ts">
	import { medusa } from '$lib/medusa';
	import { onMount } from 'svelte';
	import SimpleProduct from '../product/simple-product.svelte';

	let products: any = [];

	async function getProducts() {
		const { products: productsList } = await medusa.products.list();
		products = productsList;
		console.log(products);
	}

	onMount(() => {
		getProducts();
	});
</script>

<div>
	<ul class="grid gap-20">
		{#each products as product}
			<li>
				<SimpleProduct {product} />
			</li>
		{/each}
	</ul>
</div>
