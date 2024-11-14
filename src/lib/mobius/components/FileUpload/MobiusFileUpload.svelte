<script lang="ts">
  import Card from "$lib/cards/Card.svelte";
  import { Severity } from "$lib/Mobius/shared/common.util";
  // import { MobiusButtonVariants } from "../Button/Index";
  // import MobiusButton from "../Button/MobiusButton.svelte";

  const handleDownloadSample = () => {}

</script>

<Card class="rounded w-full">
    <div class="header p-6 w-full">
        <!-- <MobiusButton severity={Severity.BASIC} variant={MobiusButtonVariants.OUTLINE} onclick={handleDownloadSample} appendClass=" text-sm w-full font-light">Download Sample</MobiusButton> -->
    </div>
    <span class=""></span>
    <div class="content p-6"></div>
</Card>
<div class="helperText"></div>