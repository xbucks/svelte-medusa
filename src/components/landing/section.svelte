<script lang="ts">
	export let title: string;
</script>

<section class="max-w-sm mx-auto my-20 grid gap-10 md:max-w-3xl xl:max-w-7xl">
	<h2 class="text-2xl">{title}</h2>
	<slot />
</section>
