<script lang="ts">
  import type { MultiSelectProps, MultiSelectType } from "$lib/MobiusComponents/MultiSelect";
  import MultiSelect from "$lib/MobiusComponents/MultiSelect/MultiSelect.svelte";
  import { sineIn } from "svelte/easing";
  import { Button, Dropdown, DropdownUl, DropdownLi, uiHelpers } from "$lib";

  let dropdownAvatar = uiHelpers();
  let dropdownAvatarStatus = $state(false);
  let variantState = $state<MultiSelectType>("OUTLINE")
  let closeDropdownAvatar = dropdownAvatar.close;
  $effect(() => {
    dropdownAvatarStatus = dropdownAvatar.isOpen;
  });

  $effect(()=> {
    props.variant = variantState
  })

  let props : MultiSelectProps = $state({
      isSmallTextVisible: false,
      variant: $state.snapshot(variantState),
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
  })

  const setVariant = (variant: MultiSelectType) => {
    variantState = variant;
  }

</script>

<div class="flex ml-32  items-start justify-center">
  <Button onclick={dropdownAvatar.toggle} color="light" class="p-3">
    variants
  </Button>
  <div class="relative">
    <Dropdown dropdownStatus={dropdownAvatarStatus} closeDropdown={closeDropdownAvatar} params={{ y: 0, duration: 200, easing: sineIn }} class="absolute -left-[130px] top-[50px] bg-slate-100">
  <DropdownUl>
        <DropdownLi>
          <div  class='p-2 hover:bg-slate-200 cursor-pointer' onclick={() => setVariant("OUTLINE")}>
            OUTLINE
          </div>
        </DropdownLi>
        <DropdownLi>
          <div  class='p-2 hover:bg-slate-200 cursor-pointer' onclick={() => setVariant("UPSELL")}>
            UPSELL
          </div>
        </DropdownLi>
        <DropdownLi>
          <div  class='p-2 hover:bg-slate-200 cursor-pointer' onclick={() => setVariant("CHECKBOX")}>
            CHECKBOX
          </div>
        </DropdownLi>
      </DropdownUl>
  </Dropdown>
  </div>
</div>

{variantState}

<div class="p-2">
  
  <MultiSelect {...props} />
</div>