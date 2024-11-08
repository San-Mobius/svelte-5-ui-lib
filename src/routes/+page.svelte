<script lang="ts">
  import AutoEmailPhoneToggle from "$lib/MobiusComponents/AutoEmailPhoneToggle/AutoEmailPhoneToggle.svelte";
  import type { MultiSelectProps } from "$lib/MobiusComponents/MultiSelect";
  import MultiSelect from "$lib/MobiusComponents/MultiSelect/MultiSelect.svelte";
  let lau = $state();

  let props : MultiSelectProps = {
    isSmallTextVisible: false,
    variant: "OUTLINE",
    options: [
      {
        helperText: "HELPER TEXT",
        label: "LABEL",
        value: 1,
        imageSrc: "https://www.pngplay.com/wp-content/uploads/6/Avengers-Movie-Logo-Red-PNG.png",
        buttonProps: {
          label: "Select",
          selectedLabel: "Selected"
        }
      },
      {
        helperText: "HELPER TEXT",
        label: "LABEL",
        value: 2,
        buttonProps: {
          label: "Select",
          selectedLabel: "Selected"
        }
      },
      {
        helperText: "HELPER TEXT",
        label: "LABEL",
        value: 3,
        buttonProps: {
          label: "Select",
          selectedLabel: "Selected"
        }
      },
      {
        helperText: "HELPER TEXT",
        label: "LABEL",
        value: 4,
        buttonProps: {
          label: "Select",
          selectedLabel: "Selected"
        }
      },
      {
        helperText: "HELPER TEXT",
        label: "LABEL",
        value: 5,
        buttonProps: {
          label: "Select",
          selectedLabel: "Selected"
        }
      }
    ],
    gap: 2
  };

</script>

<div class="p-2">
  <MultiSelect {...props} />
</div>