<template>
    <div>
        <!-- Page Header -->
        <v-container class="text-center py-12" style="max-width: 800px">
            <h1 class="text-h3 font-weight-bold mb-2">Contact</h1>
            <p class="text-body-1 text-medium-emphasis">
                Get in touch with me for collaborations, questions, or just to say hi!
            </p>
        </v-container>

        <!-- Contact Content -->
        <v-container style="max-width: 600px">
            <!-- Contact Info Card -->
            <v-card variant="outlined">
                <v-card-title class="text-h6">Let's Connect</v-card-title>
                <v-card-text>
                    <p class="text-body-2 text-medium-emphasis mb-6">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
                        vision.
                    </p>

                    <div class="d-flex flex-column ga-4">
                        <div class="d-flex align-center ga-3">
                            <v-avatar color="primary" size="40" variant="tonal">
                                <v-icon>mdi-email-outline</v-icon>
                            </v-avatar>
                            <div>
                                <div class="text-caption text-medium-emphasis">Email</div>
                                <a href="https://mail.google.com/mail/?view=cm&to=tuna.akargul@gmail.com"
                                    target="_blank" class="text-body-2 text-primary text-decoration-none">
                                    tuna.akargul@gmail.com
                                </a>
                            </div>
                        </div>

                        <div class="d-flex align-center ga-3">
                            <v-avatar color="primary" size="40" variant="tonal">
                                <v-icon>mdi-phone-outline</v-icon>
                            </v-avatar>
                            <div>
                                <div class="text-caption text-medium-emphasis">Phone</div>
                                <a href="tel:+905372078499" target="_blank" class="text-body-2 text-primary text-decoration-none">
                                    +90 537 207 84 99
                                </a>
                            </div>
                        </div>

                        <div class="d-flex align-center ga-3">
                            <v-avatar color="primary" size="40" variant="tonal">
                                <v-icon>mdi-map-marker-outline</v-icon>
                            </v-avatar>
                            <div>
                                <div class="text-caption text-medium-emphasis">Location</div>
                                <div class="text-body-2">Turkey</div>
                            </div>
                        </div>

                        <div class="d-flex align-center ga-3">
                            <v-avatar color="primary" size="40" variant="tonal">
                                <v-icon>mdi-briefcase-outline</v-icon>
                            </v-avatar>
                            <div>
                                <div class="text-caption text-medium-emphasis">Currently Working At</div>
                                <a href="https://apimeet.com" target="_blank"
                                    class="text-body-2 text-primary text-decoration-none">
                                    ApiMeet
                                </a>
                            </div>
                        </div>
                    </div>
                </v-card-text>
            </v-card>

            <!-- Call to Action -->
            <v-card class="mt-8 text-center" color="primary" variant="tonal">
                <v-card-text class="py-8">
                    <v-icon size="48" color="primary" class="mb-4">mdi-rocket-launch-outline</v-icon>
                    <h2 class="text-h5 font-weight-bold mb-2">Have a Project in Mind?</h2>
                    <p class="text-body-1 text-medium-emphasis mb-4">
                        Whether it's a game, website, or creative idea — let's make it happen!
                    </p>
                    <v-btn href="https://mail.google.com/mail/?view=cm&to=tuna.akargul@gmail.com" color="primary"
                        size="large" rounded="lg">
                        <v-icon start>mdi-email</v-icon>
                        Send Me an Email
                    </v-btn>
                </v-card-text>
            </v-card>
        </v-container>
    </div>
</template>

<script setup lang="ts">
</script>
