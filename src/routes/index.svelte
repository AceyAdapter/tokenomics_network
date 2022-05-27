<script>
    import Wave from '../components/wave.svelte';
</script>

<div class="z-30 h-full">
    <div class="flex flex-col justify-center items-center h-3/4 text-4xl">
        <div class="flex flex-wrap w-1/2 justify-center text-center">
            <p class="">Hi! I'm <span class="text-primary"> Nick</span>. A <span class="text-accent">student</span>, <span class="text-secondary">programmer</span>, and enthusiast for anything creative.</p>
        </div>
        <div class="flex flex-row mt-10">
            <div class="btn btn-accent mx-4">View My Resume</div>
            <div class="btn btn-secondary mx-4">View My Work</div>
        </div>
    </div>
</div>
<div class="z-20">
    <Wave/>
</div>
