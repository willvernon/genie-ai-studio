'use client'

import axios from 'axios'
import React from 'react'
import * as z from 'zod'
import { MessageSquare } from 'lucide-react'
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
import { Empty } from '@/components/empty/convo-empty'
import { Loader } from '@/components/loader'
import { cn } from '@/lib/utils'
import { UserAvatar } from '@/components/user-avatar'
import { BotAvatar } from '@/components/bot-avatar'

function ConversationPage() {
	const router = useRouter()
	const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([])

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			prompt: '',
		},
	})

	const isLoading = form.formState.isSubmitting

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			const userMessage: ChatCompletionRequestMessage = {
				role: 'user',
				content: values.prompt,
			}
			const newMessages = [...messages, userMessage]

			const response = await axios.post('/api/conversation', {
				messages: newMessages,
			})

			setMessages((current) => [...newMessages, response.data])
			form.reset()
		} catch (error: any) {
			// TODO: Open Pro Modal
			console.log(error)
		} finally {
			router.refresh()
		}
	}

	return (
		<div>
			<Heading
				title="Conversation"
				description="This is the conversation page"
				icon={MessageSquare}
				iconColor="text-violet-400"
				bgColor="bg-violet-400/40"
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
												placeholder="Type your message here..."
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
					{messages.length === 0 && !isLoading && (
						<Empty label="No conversation started." />
					)}
					<div className="flex flex-col-reverse gap-y-4">
						{messages.map((message) => (
							<div
								key={message.content}
								className={cn(
									'p-8 w-full flex items-start gap-x-8 rounded-lg',
									message.role === 'user'
										? 'bg-white border border-black/30'
										: 'bg-black/20'
								)}
							>
								{message.role === 'user' ? <UserAvatar /> : <BotAvatar />}
								<p className="text-sm my-auto">{message.content}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ConversationPage
