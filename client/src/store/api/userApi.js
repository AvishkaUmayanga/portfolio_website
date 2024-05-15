import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const userAPI = createApi({
    reducerPath: 'user-api-reducer',
    tagTypes: ['data'],
    baseQuery: fetchBaseQuery({baseUrl:'https://avishka-portfoio.vercel.app/'}),
    endpoints: builder =>({
        getProfileImage: builder.query({
            query:() =>({
                url: '/get_profile',
                method: 'get'
            }),
            providesTags: ()=>{
                return [{type:'data', id:'proImg'}]
            }
        }),

        addProfileImage: builder.mutation({
            query:(imgData) =>({
                url: '/add_profile',
                method: 'post',
                body: imgData
            }),
            invalidatesTags: ()=>{
                return [{type:'data', id:'proImg'}]
            }
        }),

        getSkillImages: builder.query({
            query:() =>({
                url: '/skills',
                method: 'get'
            }),
            providesTags: ()=>{
                return [{type:'data', id:'skillImg'}]
            }
        }),

        addSkillImages: builder.mutation({
            query:(skillData) =>({
                url: '/add_skill',
                method: 'post',
                body: skillData
            }),
            invalidatesTags: ()=>{
                return [{type:'data', id:'skillImg'}]
            }
        }),

        getCv: builder.query({
            query:() =>({
                url: '/download_cv',
                method: 'get',
            }),
            providesTags: ()=>{
                return [{type:'data', id:'cvData'}]
            }
        }),

        addCv: builder.mutation({
            query:(cv) =>({
                url: '/add_cv',
                method: 'post',
                body: cv
            }),
            invalidatesTags: ()=>{
                return [{type:'data', id:'cvData'}]
            }
        }),

        getExperience: builder.query({
            query:() =>({
                url: '/experience',
                method: 'get'
            }),
            providesTags: ()=>{
                return [{type:'data', id:'experienceData'}]
            }
        }),

        addExperience: builder.mutation({
            query:(experience) =>({
                url: '/add_experience',
                method: 'post',
                body: experience
            }),
            invalidatesTags: ()=>{
                return [{type:'data', id:'experienceData'}]
            }
        }),

        sendEmail: builder.mutation({
            query:(messageData) =>({
                url: '/send_mail',
                method: 'post',
                body: messageData
            })
        }),

        login: builder.mutation({
            query:(loginData) =>({
                url: '/login',
                method: 'post',
                body: loginData
            })
        })
    })
})

export const { useGetProfileImageQuery, useAddProfileImageMutation, useAddSkillImagesMutation, useGetSkillImagesQuery, useAddCvMutation, useGetCvQuery, useAddExperienceMutation, useGetExperienceQuery, useSendEmailMutation, useLoginMutation } = userAPI
export default userAPI
