import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import Avatar from './Avatar'
import { LinkIcon, PhotographIcon } from '@heroicons/react/outline'
import { useForm } from 'react-hook-form'

type FormData = {
  postTitle: string
  postBody: string
  postImage: string
  subreddit: string
}

function PostBox() {
    const { data: session } = useSession()
    const [imageBoxOpen, setImageBoxOpen] = useState<boolean>(false)
    const { 
      register,
      handleSubmit,
      watch,
      formState: { errors },
     } = useForm<FormData>();

  return (
  <form className='sticky top-16 z-50 bg-white border rounded-md border-gray-300 p-2'>
    <div className='flex items-center space-x-3'>
        <Avatar />

        <input
        {...register('postTitle', { required: true })}
        disabled={!session} 
        className="bg-gray-50 p-2 pl-5 outline-none flex-1 rounded-md"
        type="text" 
        placeholder={
            session ? 'Create a post by entering a title!' : 'Sign in to post'
        } />

        <PhotographIcon 
          onClick={() => setImageBoxOpen(!imageBoxOpen)} 
          className={`h-6 text-gray-300 cursor-pointer ${
            imageBoxOpen && 'text-blue-300'
          } `}
        />
        <LinkIcon className='h-6 text-gray-300'/>
    </div>

    {!!watch('postTitle') && (
      <div className='flex flex-col py-2'>
        {/* Body */}
        <div className='flex items-center px-2'>
            <p className='min-w-[90px]'>Body:</p>
            <input
              className='m-2 flex-1 bg-blue p-2 outline-none'
              {...register('postBody')} 
              type='text'
              placeholder='Text (Optional)'/>
        </div>

        <div className='flex items-center px-2'>
           <p className='min-w-[90px]'>Subreddit:</p>
            <input
              className='m-2 flex-1 bg-blue p-2 outline-none'
              {...register('subreddit')} 
              type='text'
              placeholder='i.e. reactjs'/>
        </div>

        {imageBoxOpen && (
          <div className='flex items-center px-2'>
          <p className='min-w-[90px]'>Image URL:</p>
          <input
              className='m-2 flex-1 bg-blue p-2 outline-none'
              {...register('postImage')} 
              type='text'
              placeholder='Optional...'/>
          </div>
        )}

      </div>
    )}
  </form>
  )
} 

export default PostBox