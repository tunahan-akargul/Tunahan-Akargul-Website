<template>
    <div>
        <!-- Back Button & Title -->
        <v-container class="py-8" style="max-width: 900px">
            <div class="d-flex align-center ga-4 mb-6">
                <v-btn icon="mdi-arrow-left" variant="outlined" size="small" to="/blog" />
                <h1 class="text-h4 text-md-h3 font-weight-bold">
                    Prompt Engineering
                </h1>
            </div>

            <!-- What is Prompt Engineering? -->
            <section class="mb-8">
                <v-card variant="tonal" color="primary" class="pa-5 mb-6">
                    <h2 class="text-h5 font-weight-bold mb-4">
                        <v-icon class="mr-2">mdi-head-lightbulb</v-icon>
                        What is Prompt Engineering?
                    </h2>
                    <p class="text-body-1">
                        Prompt engineering is the skill of getting better results from AI by giving it clearer
                        <strong>instructions</strong>, <strong>context</strong>, <strong>constraints</strong>, and
                        <strong>evaluation</strong>—so the model does the right thing the first time (or in fewer
                        iterations).
                    </p>
                    <p class="text-body-1 mt-3 mb-0">
                        It's less "magic phrasing" and more like <em>good API design + good communication</em>: define
                        inputs, outputs, edge cases, and quality checks.
                    </p>
                </v-card>
            </section>

            <v-divider class="my-8" />

            <!-- Why Learn It? -->
            <section class="mb-8">
                <h2 class="text-h5 font-weight-bold mb-4">
                    <v-icon class="mr-2" color="warning">mdi-school</v-icon>
                    Why do we have to learn it?
                </h2>
                <p class="text-body-1 text-medium-emphasis mb-4">
                    Because AI is powerful but not a mind reader.
                </p>

                <v-row>
                    <v-col cols="12" md="6">
                        <v-card class="pa-4 h-100" variant="outlined" color="error">
                            <div class="d-flex align-center mb-2">
                                <v-icon color="error" class="mr-2">mdi-close-circle</v-icon>
                                <h3 class="text-subtitle-1 font-weight-bold">Without good prompts</h3>
                            </div>
                            <v-list density="compact" bg-color="transparent">
                                <v-list-item>
                                    <template #prepend>
                                        <v-icon size="small" color="error">mdi-minus</v-icon>
                                    </template>
                                    Generic answers
                                </v-list-item>
                                <v-list-item>
                                    <template #prepend>
                                        <v-icon size="small" color="error">mdi-minus</v-icon>
                                    </template>
                                    Missed constraints
                                </v-list-item>
                                <v-list-item>
                                    <template #prepend>
                                        <v-icon size="small" color="error">mdi-minus</v-icon>
                                    </template>
                                    Wrong assumptions
                                </v-list-item>
                            </v-list>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-card class="pa-4 h-100" variant="outlined" color="success">
                            <div class="d-flex align-center mb-2">
                                <v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
                                <h3 class="text-subtitle-1 font-weight-bold">With good prompts</h3>
                            </div>
                            <v-list density="compact" bg-color="transparent">
                                <v-list-item>
                                    <template #prepend>
                                        <v-icon size="small" color="success">mdi-plus</v-icon>
                                    </template>
                                    Usable code & specs
                                </v-list-item>
                                <v-list-item>
                                    <template #prepend>
                                        <v-icon size="small" color="success">mdi-plus</v-icon>
                                    </template>
                                    Accurate emails & plans
                                </v-list-item>
                                <v-list-item>
                                    <template #prepend>
                                        <v-icon size="small" color="success">mdi-plus</v-icon>
                                    </template>
                                    Checklists & test cases
                                </v-list-item>
                            </v-list>
                        </v-card>
                    </v-col>
                </v-row>

                <v-alert type="info" variant="tonal" class="mt-6">
                    <strong>It saves time and reduces mistakes</strong>—especially in professional settings
                    (engineering,
                    business, research). It's basically the new "how to search well," but for reasoning and creation
                    instead of just retrieval.
                </v-alert>
            </section>

            <v-divider class="my-8" />

            <!-- Real-World Examples: Bad vs Good Prompts -->
            <section class="mb-8">
                <h2 class="text-h5 font-weight-bold mb-4">
                    <v-icon class="mr-2" color="purple">mdi-compare</v-icon>
                    Real-World Examples: Bad vs Good Prompts
                </h2>
                <p class="text-body-1 text-medium-emphasis mb-6">
                    Let's see the difference in action. Here are 2 real scenarios showing how a small change in prompt
                    structure leads to dramatically better results.
                </p>

                <!-- Example 1: Jira Task Changes -->
                <v-card variant="outlined" class="mb-6">
                    <v-card-item class="bg-surface-variant">
                        <v-card-title class="d-flex align-center">
                            <v-chip color="primary" size="small" class="mr-2">1</v-chip>
                            "Summarize Jira task changes"
                        </v-card-title>
                    </v-card-item>
                    <v-card-text>
                        <v-row>
                            <v-col cols="12">
                                <v-card variant="tonal" color="error" class="pa-4 h-100 mt-4">
                                    <div class="d-flex align-center mb-3">
                                        <v-icon color="error" class="mr-2">mdi-close-circle</v-icon>
                                        <h4 class="text-subtitle-1 font-weight-bold">Bad Prompt</h4>
                                    </div>
                                    <v-card variant="outlined" class="pa-3 mb-3 bg-surface">
                                        <code class="text-body-2">"Check both versions of Jira tasks and list what
                                changed."</code>
                                    </v-card>
                                    <h5 class="text-subtitle-2 font-weight-bold mb-2">Why it's bad:</h5>
                                    <v-list density="compact" bg-color="transparent">
                                        <v-list-item class="px-0">
                                            <template #prepend>
                                                <v-icon size="small" color="error">mdi-minus</v-icon>
                                            </template>
                                            No input definition (where are the two versions?)
                                        </v-list-item>
                                        <v-list-item class="px-0">
                                            <template #prepend>
                                                <v-icon size="small" color="error">mdi-minus</v-icon>
                                            </template>
                                            No format specified
                                        </v-list-item>
                                        <v-list-item class="px-0">
                                            <template #prepend>
                                                <v-icon size="small" color="error">mdi-minus</v-icon>
                                            </template>
                                            No rules (what counts as "changed"?)
                                        </v-list-item>
                                        <v-list-item class="px-0">
                                            <template #prepend>
                                                <v-icon size="small" color="error">mdi-minus</v-icon>
                                            </template>
                                            Output will be vague
                                        </v-list-item>
                                    </v-list>
                                </v-card>
                            </v-col>
                            <v-col cols="12">
                                <v-card variant="tonal" color="success" class="pa-4 h-100">
                                    <div class="d-flex align-center mb-3">
                                        <v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
                                        <h4 class="text-subtitle-1 font-weight-bold">Good Prompt</h4>
                                    </div>
                                    <CodeBlock filename="Structured Prompt" :lines="jiraGoodPromptLines" />
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>

                <!-- Example 2: Fix a Bug -->
                <v-card variant="outlined" class="mb-6">
                    <v-card-item class="bg-surface-variant">
                        <v-card-title class="d-flex align-center">
                            <v-chip color="success" size="small" class="mr-2">2</v-chip>
                            "Fix a bug in code"
                        </v-card-title>
                    </v-card-item>
                    <v-card-text>
                        <v-row>
                            <v-col cols="12">
                                <v-card variant="tonal" color="error" class="pa-4 h-100 mt-4">
                                    <div class="d-flex align-center mb-3">
                                        <v-icon color="error" class="mr-2">mdi-close-circle</v-icon>
                                        <h4 class="text-subtitle-1 font-weight-bold">Bad Prompt</h4>
                                    </div>
                                    <v-card variant="outlined" class="pa-3 mb-3 bg-surface">
                                        <code class="text-body-2">"Fix my Unity error."</code>
                                    </v-card>
                                    <h5 class="text-subtitle-2 font-weight-bold mb-2">Why it's bad:</h5>
                                    <v-list density="compact" bg-color="transparent">
                                        <v-list-item class="px-0">
                                            <template #prepend>
                                                <v-icon size="small" color="error">mdi-minus</v-icon>
                                            </template>
                                            No error text provided
                                        </v-list-item>
                                        <v-list-item class="px-0">
                                            <template #prepend>
                                                <v-icon size="small" color="error">mdi-minus</v-icon>
                                            </template>
                                            No code context
                                        </v-list-item>
                                        <v-list-item class="px-0">
                                            <template #prepend>
                                                <v-icon size="small" color="error">mdi-minus</v-icon>
                                            </template>
                                            No expected behavior
                                        </v-list-item>
                                        <v-list-item class="px-0">
                                            <template #prepend>
                                                <v-icon size="small" color="error">mdi-minus</v-icon>
                                            </template>
                                            AI guesses randomly
                                        </v-list-item>
                                    </v-list>
                                </v-card>
                            </v-col>
                            <v-col cols="12">
                                <v-card variant="tonal" color="success" class="pa-4 h-100">
                                    <div class="d-flex align-center mb-3">
                                        <v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
                                        <h4 class="text-subtitle-1 font-weight-bold">Good Prompt</h4>
                                    </div>
                                    <CodeBlock filename="Structured Prompt" :lines="bugFixGoodPromptLines" />
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </section>

            <v-divider class="my-8" />
            <section class="mb-8">
                <h2 class="text-h5 font-weight-bold mb-4">
                    <v-icon class="mr-2" color="success">mdi-rocket-launch</v-icon>
                    How can we learn it easily?
                </h2>
                <p class="text-body-1 text-medium-emphasis mb-4">
                    The fastest way is to treat prompting like a small engineering loop:
                </p>

                <v-timeline side="end" density="compact">
                    <v-timeline-item v-for="step in learningSteps" :key="step.number" :dot-color="step.color"
                        size="small">
                        <template #opposite>
                            <v-chip :color="step.color" size="small" class="font-weight-bold">
                                {{ step.number }}
                            </v-chip>
                        </template>
                        <v-card variant="outlined" class="pa-3">
                            <h4 class="text-subtitle-1 font-weight-bold mb-1">{{ step.title }}</h4>
                            <p class="text-body-2 text-medium-emphasis mb-0">{{ step.description }}</p>
                        </v-card>
                    </v-timeline-item>
                </v-timeline>

                <v-alert type="success" variant="tonal" class="mt-6">
                    If you do this repeatedly for your real tasks (work + life), you learn prompt engineering naturally.
                </v-alert>
            </section>

            <v-divider class="my-8" />

            <!-- Key to Using AI -->
            <section class="mb-8">
                <h2 class="text-h5 font-weight-bold mb-4">
                    <v-icon class="mr-2" color="primary">mdi-key-variant</v-icon>
                    What is the key of using AI?
                </h2>

                <v-card color="primary" class="pa-6" variant="flat">
                    <p class="text-body-1 text-white mb-4">
                        The key is: treat AI like a <strong>very fast junior teammate</strong>:
                    </p>
                    <v-list bg-color="transparent" density="compact">
                        <v-list-item>
                            <template #prepend>
                                <v-icon color="white">mdi-lightning-bolt</v-icon>
                            </template>
                            <v-list-item-title class="text-white">
                                It can draft quickly, explore options, summarize, refactor, generate alternatives
                            </v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <template #prepend>
                                <v-icon color="white">mdi-directions</v-icon>
                            </template>
                            <v-list-item-title class="text-white">
                                But it needs direction, boundaries, and review
                            </v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <template #prepend>
                                <v-icon color="white">mdi-star</v-icon>
                            </template>
                            <v-list-item-title class="text-white">
                                Your value becomes: asking the right questions + judging quality + integrating into real
                                work
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-card>

                <v-card variant="tonal" color="warning" class="pa-4 mt-6">
                    <h3 class="text-h6 font-weight-bold mb-3">
                        <v-icon class="mr-2">mdi-trophy</v-icon>
                        The best AI users are not the ones who know "magic prompts"
                    </h3>
                    <p class="text-body-1 mb-0">
                        They're the ones who: <strong>clarify goals</strong>, <strong>provide good context</strong>,
                        <strong>demand structured outputs</strong>, and <strong>verify results</strong>.
                    </p>
                </v-card>
            </section>

            <v-divider class="my-8" />

            <!-- Using AI Better -->
            <section class="mb-8">
                <h2 class="text-h5 font-weight-bold mb-6">
                    <v-icon class="mr-2" color="info">mdi-trending-up</v-icon>
                    When we want to use AI better, what do we have to do?
                </h2>

                <v-row>
                    <v-col cols="12" md="4">
                        <v-card class="pa-4 h-100" variant="outlined">
                            <div class="d-flex align-center mb-3">
                                <v-avatar color="primary" size="32" class="mr-2">
                                    <span class="text-white font-weight-bold">1</span>
                                </v-avatar>
                                <h3 class="text-subtitle-1 font-weight-bold">Get better at inputs</h3>
                            </div>
                            <v-list density="compact" bg-color="transparent">
                                <v-list-item>
                                    <template #prepend>
                                        <v-icon size="small" color="primary">mdi-check</v-icon>
                                    </template>
                                    Give examples of what "good" looks like (1–3 samples)
                                </v-list-item>
                                <v-list-item>
                                    <template #prepend>
                                        <v-icon size="small" color="primary">mdi-check</v-icon>
                                    </template>
                                    Provide constraints (time, tone, tech stack, audience)
                                </v-list-item>
                                <v-list-item>
                                    <template #prepend>
                                        <v-icon size="small" color="primary">mdi-check</v-icon>
                                    </template>
                                    Share the "definition of done"
                                </v-list-item>
                            </v-list>
                        </v-card>
                    </v-col>

                    <v-col cols="12" md="4">
                        <v-card class="pa-4 h-100" variant="outlined">
                            <div class="d-flex align-center mb-3">
                                <v-avatar color="success" size="32" class="mr-2">
                                    <span class="text-white font-weight-bold">2</span>
                                </v-avatar>
                                <h3 class="text-subtitle-1 font-weight-bold">Get better at process</h3>
                            </div>
                            <p class="text-body-2 text-medium-emphasis mb-2">Use AI in stages:</p>
                            <v-chip-group>
                                <v-chip size="x-small" variant="tonal" color="success">brainstorm</v-chip>
                                <v-chip size="x-small" variant="tonal" color="success">→ choose</v-chip>
                                <v-chip size="x-small" variant="tonal" color="success">→ draft</v-chip>
                                <v-chip size="x-small" variant="tonal" color="success">→ critique</v-chip>
                                <v-chip size="x-small" variant="tonal" color="success">→ improve</v-chip>
                            </v-chip-group>
                            <p class="text-body-2 text-medium-emphasis mt-3 mb-1">Ask it to self-check:</p>
                            <v-chip-group>
                                <v-chip size="x-small" variant="outlined">"List assumptions"</v-chip>
                                <v-chip size="x-small" variant="outlined">"Find edge cases"</v-chip>
                                <v-chip size="x-small" variant="outlined">"Propose tests"</v-chip>
                            </v-chip-group>
                        </v-card>
                    </v-col>

                    <v-col cols="12" md="4">
                        <v-card class="pa-4 h-100" variant="outlined">
                            <div class="d-flex align-center mb-3">
                                <v-avatar color="warning" size="32" class="mr-2">
                                    <span class="text-white font-weight-bold">3</span>
                                </v-avatar>
                                <h3 class="text-subtitle-1 font-weight-bold">Get better at verification</h3>
                            </div>
                            <v-list density="compact" bg-color="transparent">
                                <v-list-item>
                                    <template #prepend>
                                        <v-icon size="small" color="warning">mdi-magnify</v-icon>
                                    </template>
                                    <strong>Facts:</strong> request sources and cross-check
                                </v-list-item>
                                <v-list-item>
                                    <template #prepend>
                                        <v-icon size="small" color="warning">mdi-code-tags</v-icon>
                                    </template>
                                    <strong>Code:</strong> request tests, run it, review
                                </v-list-item>
                                <v-list-item>
                                    <template #prepend>
                                        <v-icon size="small" color="warning">mdi-pencil</v-icon>
                                    </template>
                                    <strong>Writing:</strong> request tone variants and tighten
                                </v-list-item>
                            </v-list>
                        </v-card>
                    </v-col>
                </v-row>
            </section>

            <v-divider class="my-8" />

            <!-- Roadmap -->
            <section class="mb-8">
                <h2 class="text-h5 font-weight-bold mb-6">
                    <v-icon class="mr-2" color="secondary">mdi-map-marker-path</v-icon>
                    Roadmap: Using AI Better + Learning Prompt Engineering
                </h2>

                <v-expansion-panels variant="accordion">
                    <!-- Phase 1 -->
                    <v-expansion-panel>
                        <v-expansion-panel-title>
                            <div class="d-flex align-center">
                                <v-chip color="primary" size="small" class="mr-3">Phase 1</v-chip>
                                <span class="font-weight-bold">Days 1–3: Foundations (quick wins)</span>
                            </div>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <h4 class="font-weight-bold mb-2">Learn the "Prompt Skeleton":</h4>
                            <v-card variant="outlined" class="pa-3 mb-4">
                                <v-list density="compact" bg-color="transparent">
                                    <v-list-item><strong>Role:</strong> "You are a senior X"</v-list-item>
                                    <v-list-item><strong>Goal:</strong> "Do Y"</v-list-item>
                                    <v-list-item><strong>Context:</strong> "Here's background"</v-list-item>
                                    <v-list-item><strong>Constraints:</strong> "Follow these rules"</v-list-item>
                                    <v-list-item><strong>Output:</strong> "Return in this format"</v-list-item>
                                    <v-list-item><strong>Quality:</strong> "Include edge cases +
                                        checklist"</v-list-item>
                                </v-list>
                            </v-card>

                            <h4 class="font-weight-bold mb-2">Practice drills (15 min/day):</h4>
                            <v-list density="compact" bg-color="transparent">
                                <v-list-item>
                                    <template #prepend>
                                        <v-icon size="small" color="primary">mdi-numeric-1-circle</v-icon>
                                    </template>
                                    Convert a messy request into a structured prompt
                                </v-list-item>
                                <v-list-item>
                                    <template #prepend>
                                        <v-icon size="small" color="primary">mdi-numeric-2-circle</v-icon>
                                    </template>
                                    Ask for output in two formats (table + bullet plan)
                                </v-list-item>
                                <v-list-item>
                                    <template #prepend>
                                        <v-icon size="small" color="primary">mdi-numeric-3-circle</v-icon>
                                    </template>
                                    Ask AI to ask you 3 questions, then answer using assumptions if unanswered
                                </v-list-item>
                            </v-list>
                        </v-expansion-panel-text>
                    </v-expansion-panel>

                    <!-- Phase 2 -->
                    <v-expansion-panel>
                        <v-expansion-panel-title>
                            <div class="d-flex align-center">
                                <v-chip color="success" size="small" class="mr-3">Phase 2</v-chip>
                                <span class="font-weight-bold">Days 4–10: Prompt patterns that matter</span>
                            </div>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <p class="text-body-1 mb-3">Learn 8 patterns and practice each one on a real task:</p>
                            <v-row>
                                <v-col cols="12" sm="6">
                                    <v-list density="compact" bg-color="transparent">
                                        <v-list-item>
                                            <template #prepend>
                                                <v-chip size="x-small" color="success" class="mr-2">1</v-chip>
                                            </template>
                                            Role + audience
                                        </v-list-item>
                                        <v-list-item>
                                            <template #prepend>
                                                <v-chip size="x-small" color="success" class="mr-2">2</v-chip>
                                            </template>
                                            Few-shot examples (1–2 inputs/outputs)
                                        </v-list-item>
                                        <v-list-item>
                                            <template #prepend>
                                                <v-chip size="x-small" color="success" class="mr-2">3</v-chip>
                                            </template>
                                            Constraints ("don't change existing keys")
                                        </v-list-item>
                                        <v-list-item>
                                            <template #prepend>
                                                <v-chip size="x-small" color="success" class="mr-2">4</v-chip>
                                            </template>
                                            Structured output (JSON / headings)
                                        </v-list-item>
                                    </v-list>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-list density="compact" bg-color="transparent">
                                        <v-list-item>
                                            <template #prepend>
                                                <v-chip size="x-small" color="success" class="mr-2">5</v-chip>
                                            </template>
                                            Decomposition ("plan first, then execute")
                                        </v-list-item>
                                        <v-list-item>
                                            <template #prepend>
                                                <v-chip size="x-small" color="success" class="mr-2">6</v-chip>
                                            </template>
                                            Critique + revise
                                        </v-list-item>
                                        <v-list-item>
                                            <template #prepend>
                                                <v-chip size="x-small" color="success" class="mr-2">7</v-chip>
                                            </template>
                                            Edge cases + tests
                                        </v-list-item>
                                        <v-list-item>
                                            <template #prepend>
                                                <v-chip size="x-small" color="success" class="mr-2">8</v-chip>
                                            </template>
                                            Rubric-based evaluation (1–5 for clarity...)
                                        </v-list-item>
                                    </v-list>
                                </v-col>
                            </v-row>
                        </v-expansion-panel-text>
                    </v-expansion-panel>

                    <!-- Phase 3 -->
                    <v-expansion-panel>
                        <v-expansion-panel-title>
                            <div class="d-flex align-center">
                                <v-chip color="warning" size="small" class="mr-3">Phase 3</v-chip>
                                <span class="font-weight-bold">Weeks 2–3: Build a personal "AI workflow"</span>
                            </div>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <p class="text-body-1 mb-3">Create 3 reusable prompt templates for your most common
                                work:</p>
                            <v-chip-group>
                                <v-chip variant="tonal" color="warning">Template A: Code / architecture review</v-chip>
                                <v-chip variant="tonal" color="warning">Template B: Writing (email/blog)</v-chip>
                                <v-chip variant="tonal" color="warning">Template C: Planning (roadmap / breakdown)
                                </v-chip>
                            </v-chip-group>

                            <v-alert type="info" variant="tonal" class="mt-4">
                                <strong>Build a habit:</strong> "AI first draft → I review → AI refine → I finalize."
                            </v-alert>
                        </v-expansion-panel-text>
                    </v-expansion-panel>

                    <!-- Phase 4 -->
                    <v-expansion-panel>
                        <v-expansion-panel-title>
                            <div class="d-flex align-center">
                                <v-chip color="error" size="small" class="mr-3">Phase 4</v-chip>
                                <span class="font-weight-bold">Weeks 4+: Advanced usage (what pros do)</span>
                            </div>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <v-row>
                                <v-col cols="12" md="6">
                                    <h4 class="font-weight-bold mb-2">Build a prompt library:</h4>
                                    <p class="text-body-2 text-medium-emphasis">Notion/Markdown repo with your best
                                        prompts</p>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <h4 class="font-weight-bold mb-2">Add checklists:</h4>
                                    <v-chip-group>
                                        <v-chip size="small" variant="outlined">"What assumptions?"</v-chip>
                                        <v-chip size="small" variant="outlined">"What could be wrong?"</v-chip>
                                        <v-chip size="small" variant="outlined">"What are alternatives?"</v-chip>
                                    </v-chip-group>
                                </v-col>
                            </v-row>
                            <h4 class="font-weight-bold mb-2 mt-4">Use AI for:</h4>
                            <v-chip-group>
                                <v-chip size="small" variant="tonal" color="error">test generation</v-chip>
                                <v-chip size="small" variant="tonal" color="error">refactoring</v-chip>
                                <v-chip size="small" variant="tonal" color="error">documentation</v-chip>
                                <v-chip size="small" variant="tonal" color="error">summarizing meetings</v-chip>
                                <v-chip size="small" variant="tonal" color="error">spec writing</v-chip>
                            </v-chip-group>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </section>

            <v-divider class="my-8" />

            <!-- Prompt Templates -->
            <section class="mb-8">
                <h2 class="text-h5 font-weight-bold mb-6">
                    <v-icon class="mr-2" color="purple">mdi-content-copy</v-icon>
                    Ready-to-Use Prompt Pack (Copy/Paste)
                </h2>

                <!-- Template 1 -->
                <v-card variant="outlined" class="mb-6">
                    <v-card-item class="bg-surface-variant">
                        <v-card-title class="d-flex align-center">
                            <v-chip color="primary" size="small" class="mr-2">1</v-chip>
                            General Purpose "Do It Right" Prompt
                        </v-card-title>
                    </v-card-item>
                    <v-card-text class="mt-4">
                        <CodeBlock filename="Prompt Template" :lines="generalPromptLines" />
                    </v-card-text>
                </v-card>

                <!-- Template 2 -->
                <v-card variant="outlined" class="mb-6">
                    <v-card-item class="bg-surface-variant">
                        <v-card-title class="d-flex align-center">
                            <v-chip color="success" size="small" class="mr-2">2</v-chip>
                            "Critique Then Improve" Prompt
                        </v-card-title>
                    </v-card-item>
                    <v-card-text class="mt-4">
                        <CodeBlock filename="Prompt Template" :lines="critiquePromptLines" />
                    </v-card-text>
                </v-card>

                <!-- Template 3 -->
                <v-card variant="outlined" class="mb-6">
                    <v-card-item class="bg-surface-variant">
                        <v-card-title class="d-flex align-center">
                            <v-chip color="warning" size="small" class="mr-2">3</v-chip>
                            "Turn This Into a Spec" Prompt
                        </v-card-title>
                    </v-card-item>
                    <v-card-text class="mt-4">
                        <CodeBlock filename="Prompt Template" :lines="specPromptLines" />
                    </v-card-text>
                </v-card>
            </section>
        </v-container>
    </div>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/blog/CodeBlock.vue'
import type { CodeLine } from '@/data/blogPosts'

const learningSteps = [
    {
        number: 1,
        title: 'State the goal',
        description: '"I want X for Y audience with Z constraints."',
        color: 'primary',
    },
    {
        number: 2,
        title: 'Provide context',
        description: 'Background info, definitions, examples, what you already tried.',
        color: 'success',
    },
    {
        number: 3,
        title: 'Specify the output format',
        description: 'Markdown, JSON, table, steps, code, checklist, etc.',
        color: 'warning',
    },
    {
        number: 4,
        title: 'Add constraints + quality bar',
        description: '"No assumptions," "cite sources," "use bullet points," "avoid jargon."',
        color: 'error',
    },
    {
        number: 5,
        title: 'Iterate with feedback',
        description: 'Tell it what was wrong ("too long," "missed edge cases"), then refine.',
        color: 'info',
    },
]

const generalPromptLines: CodeLine[] = [
    { lineNumber: 1, code: 'You are a senior [ROLE].', comment: 'Define the expertise' },
    { lineNumber: 2, code: '' },
    { lineNumber: 3, code: 'Goal:', comment: 'What you need' },
    { lineNumber: 4, code: '- I need [RESULT] for [AUDIENCE/USE CASE].' },
    { lineNumber: 5, code: '' },
    { lineNumber: 6, code: 'Context:', comment: 'Background information' },
    { lineNumber: 7, code: '- [BACKGROUND]' },
    { lineNumber: 8, code: '- Inputs: [DATA / LINKS / TEXT]' },
    { lineNumber: 9, code: '' },
    { lineNumber: 10, code: 'Constraints:', comment: 'Rules to follow' },
    { lineNumber: 11, code: '- Must: [RULES]' },
    { lineNumber: 12, code: '- Must NOT: [RULES]' },
    { lineNumber: 13, code: '' },
    { lineNumber: 14, code: 'Output format:', comment: 'How to structure response' },
    { lineNumber: 15, code: '- Return as:' },
    { lineNumber: 16, code: '  1) A short summary' },
    { lineNumber: 17, code: '  2) The final output in [FORMAT]' },
    { lineNumber: 18, code: '  3) A checklist I can use to validate quality' },
    { lineNumber: 19, code: '' },
    { lineNumber: 20, code: 'Quality:', comment: 'Ensure thoroughness' },
    { lineNumber: 21, code: '- List assumptions.' },
    { lineNumber: 22, code: '- Include edge cases.' },
    { lineNumber: 23, code: '- If something is unknown, ask up to 3 questions;' },
    { lineNumber: 24, code: '  otherwise proceed with reasonable assumptions.' },
]

const critiquePromptLines: CodeLine[] = [
    { lineNumber: 1, code: 'Here is my draft:', comment: 'Paste your content below' },
    { lineNumber: 2, code: '[PASTE]' },
    { lineNumber: 3, code: '' },
    { lineNumber: 4, code: 'Task:', comment: 'What to do with it' },
    { lineNumber: 5, code: '1) Critique it for clarity, correctness, and completeness.' },
    { lineNumber: 6, code: '2) Rewrite it in a better version.' },
    { lineNumber: 7, code: '3) Give 3 alternative versions with different tones' },
    { lineNumber: 8, code: '   (formal, friendly, very concise).' },
]

const specPromptLines: CodeLine[] = [
    { lineNumber: 1, code: 'Convert the following into a clear technical specification.', comment: 'Main instruction' },
    { lineNumber: 2, code: '' },
    { lineNumber: 3, code: 'Include:', comment: 'Required sections' },
    { lineNumber: 4, code: '- Overview' },
    { lineNumber: 5, code: '- Requirements (functional + non-functional)' },
    { lineNumber: 6, code: '- API/contracts (if relevant)' },
    { lineNumber: 7, code: '- Edge cases' },
    { lineNumber: 8, code: '- Acceptance criteria' },
    { lineNumber: 9, code: '- Test cases' },
    { lineNumber: 10, code: '' },
    { lineNumber: 11, code: 'Input:', comment: 'Paste content below' },
    { lineNumber: 12, code: '[PASTE]' },
]

// Real-World Examples: Good Prompts
const jiraGoodPromptLines: CodeLine[] = [
    { lineNumber: 1, code: 'Compare Version A and Version B of this Jira task text.' },
    { lineNumber: 2, code: '' },
    { lineNumber: 3, code: 'Goal:', comment: 'Clear objective' },
    { lineNumber: 4, code: '- Produce a change log that I can paste into a comment.' },
    { lineNumber: 5, code: '' },
    { lineNumber: 6, code: 'Input:', comment: 'Provide both versions' },
    { lineNumber: 7, code: '- Version A: (paste)' },
    { lineNumber: 8, code: '- Version B: (paste)' },
    { lineNumber: 9, code: '' },
    { lineNumber: 10, code: 'Rules:', comment: 'Clear constraints' },
    { lineNumber: 11, code: '- Only list differences (don\'t summarize unchanged parts).' },
    { lineNumber: 12, code: '- Group by: Title, Description, Acceptance Criteria,' },
    { lineNumber: 13, code: '  API/Contracts, Dependencies, Notes.' },
    { lineNumber: 14, code: '- If section exists in one version only, mark Added/Removed.' },
    { lineNumber: 15, code: '- Quote exact changed phrases (max 1 sentence each).' },
    { lineNumber: 16, code: '' },
    { lineNumber: 17, code: 'Output:', comment: 'Specify format' },
    { lineNumber: 18, code: '- Markdown bullets, copy-paste ready.' },
]

const bugFixGoodPromptLines: CodeLine[] = [
    { lineNumber: 1, code: 'Help me debug this Unity C# compile/runtime issue.' },
    { lineNumber: 2, code: '' },
    { lineNumber: 3, code: 'Error:', comment: 'Exact error message' },
    { lineNumber: 4, code: '- (paste exact error message)' },
    { lineNumber: 5, code: '' },
    { lineNumber: 6, code: 'Code context:', comment: 'Relevant code' },
    { lineNumber: 7, code: '- File: PersonsWalkingScript.cs lines 30–60: (paste)' },
    { lineNumber: 8, code: '- TakeScript.cs relevant fields/methods: (paste)' },
    { lineNumber: 9, code: '' },
    { lineNumber: 10, code: 'Expected behavior:', comment: 'What should happen' },
    { lineNumber: 11, code: '- Describe what should happen.' },
    { lineNumber: 12, code: '' },
    { lineNumber: 13, code: 'Constraints:', comment: 'Output requirements' },
    { lineNumber: 14, code: '- Keep changes minimal.' },
    { lineNumber: 15, code: '- Explain root cause in 3–6 bullets.' },
    { lineNumber: 16, code: '- Provide exact code patch (before/after or diff).' },
]
</script>
