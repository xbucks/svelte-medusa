<script>
	import SimpleCatalog from '../components/catalog/simple-catalog.svelte';
	import Section from '../components/landing/section.svelte';
</script>

<div class="h-96 bg-gray-200 grid items-center">
	<div class="mx-auto max-w-sm gap-10 grid">
		<h1 class="text-4xl">Acme Ecommerce Store</h1>
		<p>Discover a World of Sustainable and Eco-Friendly Products</p>
		<button class="bg-gray-400 p-4 text-white font-bold">Start Shopping</button>
	</div>
</div>

<div>
	<Section title="Catalog">
		<SimpleCatalog />
	</Section>
</div>
