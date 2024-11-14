<script lang="ts">
  import { MobiusButton, MobiusButtonVariants, Severity } from "$lib";
  // import { sineIn } from "svelte/easing";
  
  // import { MultiSelectTypeProps, type MultiSelectProps, type MultiSelectType } from "$lib/Mobius/components/MultiSelect";
  // import MultiSelect from "$lib/Mobius/components/MultiSelect/MultiSelect.svelte";
  // // import MobiusButton from "$lib/Mobius/components/Button/MobiusButton.svelte";
  // import { Severity } from "$lib/Mobius/shared/common.util";
  // import MobiusCheckbox from "$lib/Mobius/components/Checkbox/MobiusCheckbox.svelte";
  // import MobiusInput from "$lib/Mobius/components/Input/MobiusInput.svelte";
  // import MobiusFileUpload from "$lib/Mobius/components/FileUpload/MobiusFileUpload.svelte";

  // let dropdownAvatar = uiHelpers();
  // let dropdownAvatarStatus = $state(false);
  // let variantState = $state<MultiSelectType>(MultiSelectTypeProps.CHECKBOX)

  // let closeDropdownAvatar = dropdownAvatar.close;
  // $effect(() => {
  //   dropdownAvatarStatus = dropdownAvatar.isOpen;
  // });

  // $effect(()=> {
  //   props.variant = variantState
  // })

  // let props : MultiSelectProps = $state({
  //     isSmallTextVisible: false,
  //     variant: MultiSelectTypeProps.CHECKBOX,
  //     options: [
  //       {
  //         helperText: "HELPER TEXT",
  //         label: "LABEL",
  //         value: 1,
  //         imageSrc: "https://www.pngplay.com/wp-content/uploads/6/Avengers-Movie-Logo-Red-PNG.png",
  //         buttonProps: {
  //           label: "Select",
  //           selectedLabel: "Selected"
  //         }
  //       },
  //       {
  //         helperText: "HELPER TEXT",
  //         label: "LABEL",
  //         value: 2,
  //         buttonProps: {
  //           label: "Select",
  //           selectedLabel: "Selected"
  //         }
  //       },
  //       {
  //         helperText: "HELPER TEXT",
  //         label: "LABEL",
  //         value: 3,
  //         buttonProps: {
  //           label: "Select",
  //           selectedLabel: "Selected"
  //         }
  //       },
  //       {
  //         helperText: "HELPER TEXT",
  //         label: "LABEL",
  //         value: 4,
  //         buttonProps: {
  //           label: "Select",
  //           selectedLabel: "Selected"
  //         }
  //       },
  //       {
  //         helperText: "HELPER TEXT",
  //         label: "LABEL",
  //         value: 5,
  //         buttonProps: {
  //           label: "Select",
  //           selectedLabel: "Selected"
  //         }
  //       }
  //     ],
  //     gap: 2
  // })

  // const setVariant = (variant: MultiSelectTypeProps) => {
  //   variantState = variant;
  // }
  
</script>

<!-- <div class="flex ml-32  items-start justify-center">
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
</div> -->

<div class="p-2 grid gap-2">
  
  <!-- <MobiusFileUpload /> -->
  
  <!-- {variantState} -->
  <!-- <MultiSelect {...props} /> -->

  <!-- <button hx-get="www.google.com" hx-trigger="click[ctrlKey]">button</button> -->

  <MobiusButton hx-get="/api/submit" hx-trigger="click[ctrlKey]" variant={MobiusButtonVariants.LINK} severity={Severity.WARNING}>Upgrage Now</MobiusButton>

  <!-- <MobiusCheckbox severity={Severity.WARNING}>Label</MobiusCheckbox> -->
       
  <!-- <MobiusInput severity={Severity.PRIMARY} /> -->
</div>