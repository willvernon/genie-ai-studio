'use client'

import axios from 'axios'
import React from 'react'
import * as z from 'zod'
import { Music } from 'lucide-react'
import { set, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { ChatCompletionRequestMessage } from 'openai'
import { useState } from 'react'

import { Heading } from '@/components/heading'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { formSchema } from './constants'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { MusicEmpty } from '@/components/empty/music-empty'
import { Loader } from '@/components/loader'
import { cn } from '@/lib/utils'
import { useProModal } from '@/hooks/use-pro-modal'

function MusicPage() {
	const proModal = useProModal()
	const router = useRouter()
	const [music, setMusic] = useState<string>()

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			prompt: '',
		},
	})

	const isLoading = form.formState.isSubmitting

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			setMusic(undefined)

			const response = await axios.post('/api/music', values)

			setMusic(response.data.audio)
			form.reset()
		} catch (error: any) {
			if (error?.response?.status === 403) {
				proModal.onOpen()
			}
		} finally {
			router.refresh()
		}
	}

	return (
		<div>
			<Heading
				title="Music Generation"
				description="Make any kind of music with an AI Jukebox."
				icon={Music}
				iconColor="text-emerald-400"
				bgColor="bg-emerald-400/40"
			/>
			<div className="px-4 lg:px-8">
				<div>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="rounded-lg border-2 border-[#0000002b] shadow-md shadow-slate-500/40 w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
						>
							<FormField
								name="prompt"
								render={({ field }) => (
									<FormItem className="col-span-12 lg:col-span-10">
										<FormControl className="m-0 p-0">
											<Input
												className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
												disabled={isLoading}
												placeholder="Type something like... 'A Rap song about a dog named Bingo'"
												{...field}
											/>
										</FormControl>
									</FormItem>
								)}
							/>
							<Button
								className="col-span-12 lg:col-span-2 w-full"
								disabled={isLoading}
							>
								Generate
							</Button>
						</form>
					</Form>
				</div>
				<div className="space-y-4 mt-4">
					{isLoading && (
						<div className="p-8 rounded-lg w-full flex items-center justify-center bg-black/20">
							<Loader />
						</div>
					)}
					{!music && !isLoading && <MusicEmpty label="No music generated." />}
					{music && (
						<audio
							controls
							className="w-full mt-8"
						>
							<source src={music} />
						</audio>
					)}
				</div>
			</div>
		</div>
	)
}

export default MusicPage
