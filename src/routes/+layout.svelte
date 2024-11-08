<script lang="ts">
  import "../app.pcss";
  import "../app.css";

  import { Darkmode } from "$lib";

  let { children, data } = $props();
</script>

<Darkmode class="hidden sm:block" />

{@render children()}
