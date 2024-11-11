<script lang="ts">
  import { sineIn } from "svelte/easing";
  import { Button, Dropdown, DropdownUl, DropdownLi, uiHelpers } from "$lib";
  
  import { MultiSelectTypeProps, type MultiSelectProps, type MultiSelectType } from "$lib/Mobius/components/MultiSelect";
  import MultiSelect from "$lib/Mobius/components/MultiSelect/MultiSelect.svelte";
  import MobiusButton from "$lib/Mobius/components/Button/MobiusButton.svelte";
  import { MobiusButtonVariants } from "$lib/Mobius/components/Button/Index";
  import { Severity } from "$lib/Mobius/shared/common.util";

  let dropdownAvatar = uiHelpers();
  let dropdownAvatarStatus = $state(false);
  let variantState = $state<MultiSelectType>(MultiSelectTypeProps.CHECKBOX)

  let closeDropdownAvatar = dropdownAvatar.close;
  $effect(() => {
    dropdownAvatarStatus = dropdownAvatar.isOpen;
  });

  $effect(()=> {
    props.variant = variantState
  })

  let props : MultiSelectProps = $state({
      isSmallTextVisible: false,
      variant: MultiSelectTypeProps.CHECKBOX,
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

  const setVariant = (variant: MultiSelectTypeProps) => {
    variantState = variant;
  }

</script>

<MobiusButton variant={MobiusButtonVariants.OUTLINE} severity={Severity.WARNING}>
  Button
</MobiusButton>

<div class="flex ml-32  items-start justify-center">
  <Button onclick={dropdownAvatar.toggle} color="light" class="p-3">
    variants
  </Button>
  <div class="relative">
    <Dropdown dropdownStatus={dropdownAvatarStatus} closeDropdown={closeDropdownAvatar} params={{ y: 0, duration: 200, easing: sineIn }} class="absolute -left-[130px] top-[50px] bg-slate-100">
  <DropdownUl>
        <DropdownLi>
          <div  class='p-2 hover:bg-slate-200 cursor-pointer' onclick={() => setVariant(MultiSelectTypeProps.OUTLINE)}>
            OUTLINE
          </div>
        </DropdownLi>
        <DropdownLi>
          <div  class='p-2 hover:bg-slate-200 cursor-pointer' onclick={() => setVariant(MultiSelectTypeProps.UPSELL)}>
            UPSELL
          </div>
        </DropdownLi>
        <DropdownLi>
          <div  class='p-2 hover:bg-slate-200 cursor-pointer' onclick={() => setVariant(MultiSelectTypeProps.CHECKBOX)}>
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