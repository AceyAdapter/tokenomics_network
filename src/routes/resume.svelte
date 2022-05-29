<script>
// @ts-nocheck

    import { onMount } from "svelte";
    let PdfViewer;

    onMount(async () => {
        const module = await import("svelte-pdf");
        PdfViewer = module.default;
    });

    import resume from '../../static/Nicholas_Kreitz_resume.pdf';
</script>

<div class="flex justify-center w-full">
    <div class="p-10">
        <svelte:component this={PdfViewer} url="{resume}"/>
    </div>
</div>