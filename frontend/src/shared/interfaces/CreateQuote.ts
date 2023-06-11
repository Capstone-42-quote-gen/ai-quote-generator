
// Interface for pulling in the form select options for user to select a voice and topic
export interface CreateQuote {
    topic: string,
    voice: string,
}

// Interface for pulling in data for previewing the quote images
export interface QuoteImage {
    photographerName: string,
    photographerUrl: string,
    regularUrl: string
}
// Interface for saving the quote image that is selected by the user
export interface PartialPost {
    postProfileID: string,
    postPhotoUrl: string,
    postQuote: string,
    postPhotographerName: string,
    postPhotographerUrl: string
}