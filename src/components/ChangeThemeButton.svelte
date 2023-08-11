<script lang="ts">

    import {
        ListBox,
        ListBoxItem,
        popup,
        type PopupSettings,
    } from "@skeletonlabs/skeleton";

    import changeTheme from "../utils/changeTheme";
    
    import {
        computePosition,
        autoUpdate,
        offset,
        shift,
        flip,
        arrow,
    } from "@floating-ui/dom";

    import { storePopup } from "@skeletonlabs/skeleton";
    import theme from "../store/store";
    storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

    let comboboxValue: string = "Themes";
    let newTheme: string = "";
    const popupCombobox: PopupSettings = {
        event: "focus-click",
        target: "popupCombobox",
        placement: "bottom",
        closeQuery: ".listbox-item",
    };
</script>

<div class="card w-48 shadow-xl py-2" data-popup="popupCombobox">
    <ListBox rounded="rounded-none">
        <ListBoxItem
            bind:group={newTheme}
            on:click={() => changeTheme("evaclue")}
            name="medium"
            value="Evaclue">Evaclue</ListBoxItem
        >
        <ListBoxItem
            bind:group={newTheme}
            on:click={() => changeTheme("skeleton")}
            name="medium"
            value="Skeleton">Skeleton</ListBoxItem
        >
        <ListBoxItem
            on:click={() => changeTheme("modern")}
            bind:group={comboboxValue}
            name="medium"
            value="Modern">Modern</ListBoxItem
        >
        <ListBoxItem
            on:click={() => changeTheme("rocket")}
            bind:group={comboboxValue}
            name="medium"
            value="rocket">Rocket</ListBoxItem
        >
        <ListBoxItem
            on:click={() => changeTheme("seafoam")}
            bind:group={comboboxValue}
            name="medium"
            value="Seafoam">Seafoam</ListBoxItem
        >
        <ListBoxItem
            on:click={() => changeTheme("vintage")}
            bind:group={comboboxValue}
            name="medium"
            value="Vintage">Vintage</ListBoxItem
        >
        <ListBoxItem
            on:click={() => changeTheme("sahara")}
            bind:group={comboboxValue}
            name="medium"
            value="Sahara">Sahara</ListBoxItem
        >
        <ListBoxItem
            on:click={() => changeTheme("hamlindigo")}
            bind:group={comboboxValue}
            name="medium"
            value="HamLindigo">Hamlindigo</ListBoxItem
        >
        <ListBoxItem
            on:click={() => changeTheme("gold-nouveau")}
            bind:group={comboboxValue}
            name="medium"
            value="gold-nouveau">Gold Nouveau</ListBoxItem
        >
        <ListBoxItem
            on:click={() => changeTheme("crimson")}
            bind:group={comboboxValue}
            name="medium"
            value="Crimson">Crimson</ListBoxItem
        >
    </ListBox>
    <div class="arrow bg-surface-100-800-token" />
</div>

<button
    class="btn variant-ringed-surface w-48 justify-between"
    use:popup={popupCombobox}
>
    <span class="capitalize">{$theme ?? "Themes"}</span>
    <span>↓</span>
</button>

<style global lang="postcss">
</style>
