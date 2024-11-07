<script lang="ts">
  import "../app.pcss";

  import { Darkmode } from "$lib";

  let { children, data } = $props();
</script>

<Darkmode class="hidden sm:block" />

{@render children()}
