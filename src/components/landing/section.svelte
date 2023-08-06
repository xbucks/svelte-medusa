<script lang="ts">
	export let title: string;
</script>

<section class="max-w-sm mx-auto my-20 grid gap-10">
	<h2 class="text-2xl">{title}</h2>
	<slot />
</section>
